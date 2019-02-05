import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { BookingPage } from "../booking/booking";
import { ListingService } from "../../services/listing-schedule-service/listing.component.service";
import { AlertController, LoadingController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public like_btn = {
    color: "black",
    icon_name: "heart-outline"
  };
  public tap: number = 0;
  public Year: any;
  public Month: any;
  public DayOfMonth: any;
  origin: any;
  dest: any;
  date: any;

  constructor(
    public navCtrl: NavController,
    public listingService: ListingService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}
  search() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    if ((this.origin, this.dest, this.date)) {
      this.Year = Number(this.date.split("-")[0]);
      this.Year = String(this.Year);
      this.Month = Number(this.date.split("-")[1]);
      this.Month = String(this.Month);
      this.DayOfMonth = Number(this.date.split("-")[2]);
      this.DayOfMonth = String(this.DayOfMonth);

      this.listingService
        .listFlights(
          this.Year,
          this.Month,
          this.DayOfMonth,
          this.origin,
          this.dest
        )
        .subscribe(
          data => {
            if(data.length){
            console.log("data", data);
            loading.dismiss()
            this.navCtrl.push(BookingPage, {
              item: data
            });
          }
          else{
            let alert = this.alertCtrl.create({
              title: "Alert!",
              subTitle: "OOOOPS... No flights found!",
              buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
          }
          },
          error => {
            let alert = this.alertCtrl.create({
              title: "Alert!",
              subTitle: "OOOOPS... Something Went Wrong",
              buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            console.log(error);
          }
        );
    } else {
      let alert = this.alertCtrl.create({
        title: "Alert!",
        subTitle: "Please enter all information",
        buttons: ["Dismiss"]
      });
      loading.dismiss();
      alert.present();
    }
  }
  
}
