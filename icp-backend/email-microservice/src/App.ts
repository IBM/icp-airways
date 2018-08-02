import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as Request from 'request'
import * as nodemailer from 'nodemailer'

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
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/email', (req, res, next) => {
      console.log(req.body.toemail,req.body.src,req.body.dest)
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: process.env.EMAILUSERNAME,
               pass: process.env.EMAILPASSWORD
           }
       });
       const mailOptions = {
        from: process.env.EMAILUSERNAME, // sender address
        to: req.body.toemail, // list of receivers
        subject: 'Your Flight Booking', // Subject line
        html: '<p>Congratualtion you have booked flight from ' + req.body.src + ' to ' + req.body.dest + '</p>'
      };
      console.log('<p>Congratualtion you have booked flight from ' + req.body.src + ' to ' + req.body.dest + '</p>')
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          return console.log(err)
        else{
          res.json({
            message: "sucessful"
          });
          console.log(info);
        }
     });
    });
    this.express.use('/', router);
  }
}
export default new App().express;