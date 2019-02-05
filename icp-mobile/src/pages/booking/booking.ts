import { Component } from "@angular/core";
import { ActionSheetController } from "ionic-angular";

import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { BookingService } from "../../services/booking-service/booking.component.service";
import { Provider } from "../../provider/provider";
import { LoadingController } from "ionic-angular";
import { EmailService } from "../../services/email-service/email.component.service";
import { OdmService } from "../../services/odm-service/odm.component.service";

import { OffersPage } from "../offers/offers";
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-booking",
  templateUrl: "booking.html"
})
export class BookingPage {
  public data: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public bookingService: BookingService,
    public provider: Provider,
    public loadingCtrl: LoadingController,
    public emailService: EmailService,
    public actionSheetCtrl: ActionSheetController,
    public odmService: OdmService
  ) {
    this.data = navParams.get("item");
    console.log("this is data", this.data);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MapPage");
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "none";
      });
    }
  }
  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  cancel() {
    this.navCtrl.pop();
  }
  confirm(id, src, dest) {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Do You Want To Select Any Offers?",
      buttons: [
        {
          text: "Show Offers",
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loading.present();
            this.odmService
              .getODM(src, dest, this.provider.userData.data.TIER, 30000)
              .subscribe(
                data => {
                  if (data["code"] != 404) {
                    console.log(data);
                    loading.dismiss();
                    this.navCtrl.push(OffersPage, {
                      item: {
                        userid: this.provider.userData.data.USERID,
                        id: id,
                        data: data["flightBooking"]["offers"],
                        src: src,
                        dest: dest
                      }
                    });
                  } else {
                    let alert3 = this.alertCtrl.create({
                      title: "Alert!",
                      subTitle:
                        "OOOPS... Something Went Wrong While Choosing Offers",
                      buttons: ["Dismiss"]
                    });
                    loading.dismiss();
                    alert3.present();
                  }
                },
                error => {
                  loading.dismiss();
                }
              );
          }
        },
        {
          text: "No Offers",
          handler: () => {
            let alert = this.alertCtrl.create({
              title: "Confirm Booking",
              message: "Are you sure, you want to book this flight?",
              buttons: [
                {
                  text: "Cancel",
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  }
                },
                {
                  text: "Book",
                  handler: () => {
                    let loading = this.loadingCtrl.create({
                      content: "Please wait..."
                    });
                    loading.present();
                    this.bookingService
                      .booking(
                        this.provider.userData.data.USERID,
                        id,
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                      )
                      .subscribe(
                        data => {
                          console.log("booked flight", data);
                          let alert2 = this.alertCtrl.create({
                            title: "Success!",
                            subTitle:
                              "You Have Successfully Booked Your Flight",
                            buttons: ["Dismiss"]
                          });
                          this.emailService
                            .postEmail(
                              this.provider.userData.data.EMAIL,
                              src,
                              dest
                            )
                            .subscribe(data => {}, error => {});
                          loading.dismiss();
                          alert2.present();
                          this.navCtrl.pop();
                        },
                        error => {
                          let alert3 = this.alertCtrl.create({
                            title: "Alert!",
                            subTitle:
                              "OOOPS... Something Went Wrong While Booking",
                            buttons: ["Dismiss"]
                          });
                          loading.dismiss();
                          alert3.present();
                          this.navCtrl.pop();
                          console.log(error);
                        }
                      );
                  }
                }
              ]
            });
            alert.present();
            console.log("Archive clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });

    actionSheet.present();
  }
}
