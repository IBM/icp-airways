import { OdmService } from './../services/odm-service/odm.component.service';
import { flightTrigger } from './../animations';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Provider } from '../provider/provider';
import { ListingService } from '../services/listing-schedule-service/listing.component.service';
import { BookingService } from '../services/booking-service/booking.component.service';
import * as jwtDecode from 'jwt-decode';
import 'rxjs/Rx';
import { EthereumService } from '../services/ethereum-service/ethereum.component.service';
import { Headers, Http, RequestOptions, Response } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [flightTrigger]
})
export class HomeComponent implements OnInit {
  public modalData:any;
  public milestone: any;
  public band: any;
  public loading: any = false;
  public show: any = null;
  public Year: any;
  public Month: any;
  public DayOfMonth: any;
  public offerNamePricing:any;
  public offerTypePricing:any;
  public costPricing:any;
  public offerNameUpgrade:any;
  public offerTypeUpgrade:any;
  public costUpgrade:any;
  origin: any;
  dest: any;
  date: any;
  radioSelected:any;
  radioSelected2:any;
  public checked = "checked";
  public _url: any = "./assets/airports.json";
  public bookingID:any;
  constructor(
    public ethereumService: EthereumService,
    public provider: Provider,
    public listingService: ListingService,
    public bookingService: BookingService,
    public http: Http,
    public odmService: OdmService
  ) {
    this.show = null;
  }

  ngOnInit() {
    this.loading = true;
    if (!this.provider.rawData) {
      this.getJSON().subscribe(data => {
        this.loading = false
        this.provider.rawData = data;
      });
    }
    else{
      this.loading = false;
    }
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem('token'));
    }
  }
  public getJSON() {
    return this.http
      .get(this._url)
      .map((response: Response) => response.json());
  }
  clear() {
    this.show = null;
  }
  bookFlight(){
    console.log(this.radioSelected,this.radioSelected2)
    if(!this.radioSelected2){
      this.offerNameUpgrade = "None"
      this.offerTypeUpgrade = "None"
      this.costUpgrade = "None"
    }
    else{
      this.offerNameUpgrade = this.radioSelected2.split(',')[0]
      this.offerTypeUpgrade = this.radioSelected2.split(',')[1]
      this.costUpgrade = this.radioSelected2.split(',')[2]
      this.costUpgrade = this.costUpgrade.toString()
    }
    console.log(this.offerNameUpgrade,this.offerTypeUpgrade,this.costUpgrade)
    if(this.radioSelected){
      this.offerNamePricing = this.radioSelected.split(',')[0]
      this.offerTypePricing = this.radioSelected.split(',')[1]
      this.costPricing = this.radioSelected.split(',')[2]
      this.costPricing = this.costPricing.toString()
    }
    console.log(this.offerNamePricing ,this.offerTypePricing ,this.costPricing )
    if(this.radioSelected){
      console.log(this.bookingID)
      this.book(this.bookingID);
    }
    
  }
  search() {
    this.loading = true;
    console.log(this.origin, this.dest, this.date);
    if(this.origin,this.dest,this.date){
    this.Year = Number(this.date.split('-')[0]);
    this.Year = String(this.Year);

    this.Month = Number(this.date.split('-')[1]);
    this.Month = String(this.Month);

    this.DayOfMonth = Number(this.date.split('-')[2]);
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
          this.loading = false;
          console.log('data', data);
          this.show = data;
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
    }
    else{
      this.loading = false
    }
  }
  ask(origin,dest,firstname,id) {
    this.bookingID=id;
    console.log('booking id',this.bookingID)
    this.band = this.provider.userData.data.TIER
    console.log( this.provider.userData.data)

    if(this.band === 'GOLD'){
      this.milestone = 30000;
    }
    if(this.band === 'SILVER'){
      this.milestone = 20000;
    }
    if(this.band === 'BRONZE'){
      this.milestone = 10000;
    }
    console.log(this.band,this.milestone)
    if (this.band && this.milestone) {
      this.odmService
      .getODM(origin,dest,firstname,this.band,this.milestone)
      .subscribe(
        data => {
          console.log(data);
          this.modalData = data;
          // this.modalActions.emit({action:"modal",params:['open']});
        },
        error => {
          console.log(error);
        })
    }
  }
  closeModal() {
    // this.modalActions.emit({action:"modal",params:['close']});
  }
  book(id) {
      console.log(this.provider.userData.data.USERID, id)
    this.loading = true
    this.bookingService
    // .booking(this.provider.userData.data.USERID, id,this.offerNamePricing,this.offerTypePricing,this.costPricing,this.offerNameUpgrade,this.offerTypeUpgrade,this.costUpgrade)
    .booking(this.provider.userData.data.USERID, id,'','','','','','')
    .subscribe(
      data => {
        this.loading = false;
        console.log('booked flight', data);
        // this.modalActions.emit({action:"modal",params:['close']});
        this.show = [];
      },
      error => {
        this.loading = false
        // this.modalActions.emit({action:"modal",params:['close']});
        console.log(error);
      });
    // this.ethereumService.getBlockchain().subscribe((data) => {
    //   var temp = true;
    //   for (var i = 0; i < data.length; i++) {
    //     var obj = data[i];
    //     if (obj.USERID === this.provider.userData.data.USERID && obj.FLIGHTID === id) {
    //       temp = false
    //       break;
    //     }
    //     console.log(obj.id);
    //   }
    //   if (temp) {
    //     data.push({ USERID: this.provider.userData.data.USERID, FLIGHTID: id })
    //     var dataPush = JSON.stringify(data)
    //     console.log(data)
    //     this.ethereumService.setBlockchain(dataPush).subscribe((data) => {
    //       console.log('message', data);
    //       this.bookingService
    //         .booking(this.provider.userData.data.USERID, id)
    //         .subscribe(
    //           data => {
    //             this.loading = false
    //             console.log('booked flight', data);
    //             this.show = data;
    //           },
    //           error => {
    //             console.log(error);
    //           }
    //         );
    //     },
    //       (error) => {
    //         this.loading = false

    //         alert("Login not Succesfull")
    //       });
    //   }
    //   else {
    //     this.loading = false

    //     console.log("you have booked this flight aready")
    //   }
    // },
    //   (error) => {
    //   this.loading = false
    //     alert("cant get data from blockchain")
    //   });
    }
}
