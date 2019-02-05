import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardService } from "../dashboard/dashboard.service";
import { MapPage } from "../map/map";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController, LoadingController } from "ionic-angular";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  public show: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dashboardService: DashboardService,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController,

  ) {}

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: "Map is loading..."
    });
    loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('abe to get cooord',resp)
      console.log("ionViewDidLoad DashboardPage");
      this.dashboardService.list(resp.coords.latitude.toString(),resp.coords.longitude.toString()).subscribe(
        data => {
          loading.dismiss();
          console.log(data["Response"]["View"][0]["Result"]);
          this.show = data["Response"]["View"][0]["Result"];
        },
        error => {
          loading.dismiss();
          console.log('errorrrrr',error);
        }
      );
     }).catch((error) => {
      loading.dismiss();
       console.log('Error getting location', error);
     });
     setTimeout(() => {
      console.log("Async operation has ended");
      loading.dismiss();
    }, 7000);
     

  }
  doRefresh(refresher) {
    console.log("Begin async operation", refresher);
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("ionViewDidLoad DashboardPage");
      this.dashboardService.list(resp.coords.latitude,resp.coords.longitude).subscribe(
        data => {
          console.log(data["Response"]["View"][0]["Result"]);
          this.show = data["Response"]["View"][0]["Result"];
          refresher.complete();
        },
        error => {
          refresher.complete();
          console.log(error);
        }
      );
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 7000);
  }
  go(lat, long) {
    this.navCtrl.push(MapPage, {
      item: {
        lat: lat,
        long: long
      }
    });
  }
}
