import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Provider } from "../../provider/provider";
import { CheckinService } from "../../services/checkin-service/checkin.component.service";
import { BookingService } from "../../services/booking-service/booking.component.service";
import { LoadingController, AlertController } from "ionic-angular";

import axios from "axios";
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  public show: any = null;
  constructor(
    public navCtrl: NavController,
    public provider: Provider,
    public checkinService: CheckinService,
    public bookingService: BookingService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}
  ionViewDidLoad() {
    console.log("onview loaded");
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.bookingService
      .listBookingByUser(this.provider.userData.data.USERID)
      .subscribe(
        data => {
          var temp = JSON.parse(JSON.stringify(data));
          console.log("data", data);
          const url = this.provider.apiUrl.listFlightsByID + "/";
          console.log("urlss", url);
          if (data.length === 0) {
            loading.dismiss();
          }
          const getData = async (url, iter) => {
            try {
              const response = await axios.get(url);
              const dataa = response.data;
              console.log(dataa);
              Object.assign(temp[iter], {
                flight: dataa
              });
            } catch (error) {
              loading.dismiss();
              console.log(error);
            }
          };
          for (var iter = 0; iter < data.length; iter++) {
            getData(url + data[iter]["FlightID"], iter);
            if (iter === data.length - 1) {
              this.show = temp;
              loading.dismiss();
            }
          }
        },
        error => {
          loading.dismiss();
          console.log(error);
        }
      );
  }
  checkin(bookingid, userid) {
    let alert = this.alertCtrl.create({
      title: "Confirm Checkin",
      message: "Do you want to checkin?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Checkin",
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loading.present();
            this.checkinService.checkin(bookingid, userid).subscribe(
              data1 => {
                this.bookingService
                  .listBookingByUser(this.provider.userData.data.USERID)
                  .subscribe(
                    data2 => {
                      let alert = this.alertCtrl.create({
                        title: "Success",
                        subTitle: "Congrats You Have Successfully Checkedin",
                        buttons: ["Dismiss"]
                      });
                      alert.present();
                      loading.dismiss();
                    },
                    error => {
                      let alert = this.alertCtrl.create({
                        title: "OOOPS... Something Went Wrong",
                        subTitle: "Please try again later",
                        buttons: ["Dismiss"]
                      });
                      alert.present();
                      loading.dismiss();
                      console.log(error);
                    }
                  );
              },
              error => {
                console.log(error);
              }
            );
          }
        }
      ]
    });
    alert.present();
  }
  doRefresh(refresher) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.bookingService
      .listBookingByUser(this.provider.userData.data.USERID)
      .subscribe(
        data => {
          var temp = JSON.parse(JSON.stringify(data));
          console.log("data", data);
          const url = this.provider.apiUrl.listFlightsByID + "/";
          console.log("urlss", url);
          const getData = async (url, iter) => {
            try {
              const response = await axios.get(url);
              const dataa = response.data;
              console.log(dataa);
              Object.assign(temp[iter], {
                flight: dataa
              });
            } catch (error) {
              refresher.complete();
              console.log(error);
            }
          };
          for (var iter = 0; iter < data.length; iter++) {
            getData(url + data[iter]["FlightID"], iter);
            if (iter === data.length - 1) {
              this.show = temp;
              loading.dismiss();
              refresher.complete();
            }
          }
        },
        error => {
          loading.dismiss();
          console.log(error);
        }
      );

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 7000);
  }
}
