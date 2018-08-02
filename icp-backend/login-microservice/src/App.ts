import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
import * as cors from 'cors'
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
  private middleware(): void {
    this.express.use(function(req, res, next) {
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
    router.post('/login', (req, res, next) => {
      ibmdb.open(this.connectionString, function (err, conn) {
        conn.prepare('SELECT * FROM SAMPLE.UserData WHERE Email=?', function (err, stmt) {
          if (err) {
            console.log(err);
          }
          stmt.execute([req.body.email], function (err, result) {
            result.fetch(function (err, data) {
              if (err) {
                console.error(err);
                res.status(401).json({ message: "Server error" });
                result.closeSync();
              }
              else {
                console.log(JSON.stringify(data));
                if(!data){
                  res.status(401).json({message:"Please signup, no email exists"});
                }
                else if (passwordhash.verify(req.body.password, data.PASSWORD)) {
                  console.log(process.env.SECRET)
                  delete data['PASSWORD'];
                  data = {data:data}
                  res.json({
                    sucessful: true,
                    token: jwt.sign(data, process.env.SECRET)
                  });
                } else {
                  res.status(401).json({ message: "Password/Email did not match" });
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