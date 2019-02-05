import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passport from 'passport'
import * as passportJWT from 'passport-jwt'
import * as epimetheus from 'epimetheus'
import * as watson from 'watson-developer-cloud'
class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public assistant:any
  constructor() {
    this.express = express();
    epimetheus.instrument(this.express)
     this.assistant = new watson.AssistantV2({
      version: '2018-11-08',
      iam_apikey: process.env.APIKEY,
      url: 'https://gateway-lon.watsonplatform.net/assistant/api'
    });
    console.log(this.assistant);
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type,Content-Type, Access-Control-Allow-Headers, Authorization"); 
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/watson', (req, res, next) => {
      this.assistant.message({
        assistant_id: process.env.ASSISTANTID,
        session_id: req.body.session_id,
        input: {
          'message_type': 'text',
          'text': req.body.text
        }
      },  function(err, response) {
        if (err)
        res.status(404).json({ err });
        else
        res.status(200).json({ response });
      });
    });
    router.get('/healthz', (req, res, next) => {
      res.send('success');
    });
    router.get('/session', (req, res, next) => {
      this.assistant.createSession({
        assistant_id: process.env.ASSISTANTID,
      }, function(err, response) {
        if (err) {
          console.error(err);
          res.status(400).send(err);
        } else{
          res.status(200).send(response);
        }
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;