import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
var ibmdb = require('ibm_db');

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: String;
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
    this.connectionString = 'DATABASE=' + (process.env.DATABASE) + ';' +
      'HOSTNAME=' + process.env.HOSTNAME + ';' + 'UID=' + process.env.UID + ';' +
      'PWD=' + process.env.PASSWORD + ';' + 'PORT=' + process.env.PORT + ';' +
      'PROTOCOL=' + process.env.PROTOCOL + ';'
    console.log(this.connectionString);
    this.express = express();
    this.middleware();
    this.routes();
  }
  private ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/book', this.ensureToken, (req, res, next) => {
      ibmdb.open(this.connectionString, function (err, conn) {
        conn.prepare("insert into SAMPLE.Booking (TS, Checkin, UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade,CostNameUpgrade) VALUES (CURRENT TIMESTAMP, '0', ?, ?, ?, ?, ?, ?, ?, ?)", function (err, stmt) {
          if (err) {
            console.log(err);
            return conn.closeSync();
          }
          console.log(req.body.lastName)
          stmt.execute([req.body.UserID, req.body.FlightID, req.body.OfferNamePricing, req.body.OfferTypePricing, req.body.CostPricing, req.body.OfferNameUpgrade, req.body.OfferTypeUpgrade, req.body.CostUpgrade], function (err, result) {
            if (err) console.log(err);
            else {
              res.json({
                message: "sucessful"
              });
              result.closeSync();
            }
            conn.close(function (err) { });
          });
        });
      });
    });


    router.get('/listBookingByUser/:id', this.ensureToken, (req, res, next) => {
      ibmdb.open(this.connectionString, function (err, conn) {
        conn.prepare('select * from  SAMPLE.FlightsData f inner join SAMPLE.Booking b on f.ID = b.FlightID where b.UserID=?'
          , function (err, stmt) {
            if (err) {
              console.log('errorr', err);
            }
            stmt.execute([req.params.id,], function (err, result) {
              result.fetchAll(function (err, data) {
                if (err) {
                  console.error(err);
                  res.status(401).json({ message: "Server error" });
                  result.closeSync();
                }
                else {
                  if (data) {
                    res.json(
                      {
                        data,
                        message: true
                      }
                    );
                    result.closeSync();
                  }
                  else {
                    res.json({
                      message: false
                    });
                  }
                }
                result.closeSync();
              });
            });
          });
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;