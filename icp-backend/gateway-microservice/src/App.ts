import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import axios from 'axios'
class App {

  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type"); 
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.get('/listFlights', (req, res, next) => { 
      console.log(process.env.APPID,process.env.APPCODE,req.body.lat,req.body.long)
      axios.get('http://listingsvc.default:7000/listFlights')
      .then(function(response) {
          console.log(response.data)
        res.send(response.data);
      }).catch(error => {
        res.status(404).send(error);
    });
    });
    router.get('/healthz', (req, res, next) => {
      res.send('success');
    });
    this.express.use('/', router);
  }
}
export default new App().express;