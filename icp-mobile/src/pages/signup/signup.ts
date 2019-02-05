import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SignupService } from "../../services/signup-service/signup.component.service";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AlertController, LoadingController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  public modalData = ["GOLD", "SILVER", "BRONZE"];
  firstName: String;
  lastName: String;
  location: String;
  age: Number;
  email: String;
  password: String;
  tier: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public signupService: SignupService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }
  signin() {
    this.navCtrl.pop();
  }
  signup() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.signupService
      .signup(
        this.firstName,
        this.lastName,
        this.age,
        this.email,
        this.password,
        this.location,
        this.tier
      )
      .subscribe(
        data => {
          console.log(data);
          let alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: "Hi There! You have Sucessfully Signed Up!",
            buttons: ["Dismiss"]
          });
          loading.dismiss();
          alert.present();
          this.navCtrl.pop();
        },
        error => {
          let alert = this.alertCtrl.create({
            title: "Alert!",
            subTitle: "OOOOPS... Something Went Wrong",
            buttons: ["Dismiss"]
          });
          loading.dismiss();
          alert.present();
          this.navCtrl.pop();
          console.log(error);
        }
      );
    console.log(
      this.firstName,
      this.lastName,
      this.location,
      this.age,
      this.email,
      this.password,
      this.tier
    );
  }
}
