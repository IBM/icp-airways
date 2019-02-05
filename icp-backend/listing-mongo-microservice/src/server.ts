import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import ListingMongoController from './controllers/listing/index';
var mongoose = require('mongoose');
mongoose.Promise = Promise;
class App {
  public express: express.Application;
  public mongoUrl: string = 'mongodb://'+process.env.MONGOUSERNAME+':'+process.env.MONGOPASSWORD+'@'+process.env.HOSTNAMEMONGODB+':'+process.env.MONGOPORT+'/admin';
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.mongoSetup();
  }
  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);        
}
  private middleware(): void {
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type"); 
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
      next();
    });
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(session({secret: 'test123', saveUninitialized: false, resave: true}))
  }
  private routes(): void {
    this.express.get('/', function(_, res) {
      res.send('hi');
    });
    this.express.use('/', ListingMongoController);
  }
}
export default new App().express;