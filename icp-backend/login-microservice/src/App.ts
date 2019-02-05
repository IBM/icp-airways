import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as passwordhash from "password-hash";
import * as passport from "passport";
import * as jwt from "jsonwebtoken";
import * as passportJWT from "passport-jwt";
var ibmdb = require("ibm_db");
import * as epimetheus from "epimetheus";

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: String;
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
    this.connectionString =
      "DATABASE=" +
      process.env.DATABASE +
      ";" +
      "HOSTNAME=" +
      process.env.HOSTNAME +
      ";" +
      "UID=" +
      process.env.UID +
      ";" +
      "PWD=" +
      process.env.PASSWORD +
      ";" +
      "PORT=" +
      process.env.PORT +
      ";" +
      "PROTOCOL=" +
      process.env.PROTOCOL +
      ";";
    console.log(this.connectionString);
    this.express = express();
    epimetheus.instrument(this.express);
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type"); 
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
      next();
    });
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post("/login", (req, res, next) => {
      ibmdb.open(this.connectionString, function(err, conn) {
        conn.prepare("SELECT * FROM SAMPLE.UserData WHERE Email=?", function(
          err,
          stmt
        ) {
          if (err) {
            res.status(404).json({ err });
            console.log(err);
          }
          stmt.execute([req.body.email], function(err, result) {
            result.fetch(function(err, data) {
              if (err) {
                console.error(err);
                res.status(401).json({ message: "Server error" });
                result.closeSync();
              } else {
                console.log(JSON.stringify(data));
                if (!data) {
                  res
                    .status(401)
                    .json({ message: "Please signup, no email exists" });
                } else if (
                  passwordhash.verify(req.body.password, data.PASSWORD)
                ) {
                  console.log(process.env.SECRET);
                  delete data["PASSWORD"];
                  data = { data: data };
                  res.json({
                    sucessful: true,
                    token: jwt.sign(data, process.env.SECRET)
                  });
                } else {
                  res
                    .status(401)
                    .json({ message: "Password/Email did not match" });
                }
              }
              result.closeSync();
            });
          });
        });
      });
    });
    router.post("/createUser", (req, res, next) => {
      ibmdb.open(this.connectionString, function(err, conn) {
        conn.prepare(
          "insert into SAMPLE.UserData (LastName, FirstName, Location, Email, Password, Age, Tier) VALUES (?, ?, ?, ?, ?, ?, ?)",
          function(err, stmt) {
            if (err) {
              console.log(err);
              return conn.closeSync();
            }
            stmt.execute(
              [
                req.body.lastName,
                req.body.firstName,
                req.body.location,
                req.body.email,
                passwordhash.generate(req.body.password),
                req.body.age,
                req.body.tier
              ],
              function(err, result) {
                if (err) {
                  res.status(404).json({ err });
                  console.log(err);
                } else {
                  res.json({
                    message: "sucessful"
                  });
                  result.closeSync();
                }
                conn.close(function(err) {});
              }
            );
          }
        );
      });
    });
    router.get("/healthz", (req, res, next) => {
      res.send("success");
    });
    this.express.use("/", router);
  }
}
export default new App().express;
