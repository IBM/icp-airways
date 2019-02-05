import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { BookingService } from '../../services/booking-service/booking.component.service'
import { EmailService } from '../../services/email-service/email.component.service'
import {Provider} from '../../provider/provider'
/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  public OfferNamePricing: any;
  public OfferTypePricing: any;
  public CostPricing: any;
  public OfferNameUpgrade:any;
  public OfferTypeUpgrade:any
  public CostUpgrade
  public values:any;
  upgrades:any;
  pricing:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookingService:BookingService, public alertCtrl: AlertController, public loadingCtrl: LoadingController,public emailService:EmailService, public provider:Provider) {
    this.values = navParams.get("item");
    console.log(this.values);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
  cancel(){
    this.navCtrl.pop();
  }
  confirm(){
    if(this.pricing){
      this.OfferTypePricing='Pricing'
      this.OfferNamePricing = this.pricing.split(',')[0];
      this.CostPricing = this.pricing.split(',')[1];

    }else{
      this.OfferNamePricing='';
      this.OfferTypePricing='';
      this.CostPricing='';
    }
    if(this.upgrades){
      this.OfferNameUpgrade =  this.upgrades.split(',')[0];
      this.CostUpgrade = this.upgrades.split(',')[1];
      this.OfferTypeUpgrade='Upgrade'
    }else{
      this.OfferNameUpgrade='';
      this.OfferTypeUpgrade='';
      this.CostUpgrade='';
    }
    console.log(this.OfferNamePricing,this.OfferTypePricing,this.CostPricing,this.OfferNameUpgrade,this.OfferTypeUpgrade,this.CostUpgrade)
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
                this.values.userid,
                this.values.id,
                this.OfferNamePricing,
                this.OfferTypePricing,
                this.CostPricing,
                this.OfferNameUpgrade,
                this.OfferTypeUpgrade,
                this.CostUpgrade
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
                      this.values.src,
                      this.values.dest
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
  }
}
