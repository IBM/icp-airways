import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";
import { LoginService } from "../../services/login-service/login.component.service";
import { AlertController, LoadingController } from "ionic-angular";
import {Provider} from '../../provider/provider'
import * as jwtDecode from 'jwt-decode';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  username: String;
  password: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public provider:Provider,
    public statusBar: StatusBar
  ) {}
  ionViewWillEnter() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  login() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.loginService.login(this.username, this.password).subscribe(
      data => {
        // this.statusBar.backgroundColorByHexString("#25312C")
        this.provider.token = data['token'];
        localStorage.setItem('token', this.provider.token);
        this.provider.userData = jwtDecode( data['token']);
        console.log(this.provider.userData)
        this.navCtrl.push(TabsPage);
        loading.dismiss();
      },
      error => {
        console.log(error)
        let alert = this.alertCtrl.create({
          title: "Alert!",
          subTitle: "OOOOPS... Something Went Wrong",
          buttons: ["Dismiss"]
        });
        loading.dismiss();
        alert.present();
      }
    );
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
