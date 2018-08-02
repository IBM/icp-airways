import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
import * as Request from 'request'

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
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
    router.post('/odm', this.ensureToken, (req, res, next) => {
      Request.post({
        headers: { "content-type": "application/json" },
        url: process.env.ODM,
        body: JSON.stringify({
          flightBooking:{
          srcAirport: req.body.srcAirport,
          dstAirport: req.body.dstAirport,
          customerTier: req.body.customerTier,
          customerName: req.body.customerName,
          milesBalance: req.body.milesBalance,
          offers: [],
          messages: []
        }
        })
      }, (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        var a = JSON
        res.json(JSON.parse(body));
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;