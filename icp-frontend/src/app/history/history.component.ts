import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider/provider';
import { BookingService } from '../services/booking-service/booking.component.service';
import { CheckinService } from '../services/checkin-service/checkin.component.service';
import { EthereumService } from '../services/ethereum-service/ethereum.component.service';
import { EmailService } from '../services/email-service/email.component.service';
import * as iso from "iso-3166-1";

import * as jwtDecode from 'jwt-decode';
import 'rxjs/Rx';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public loading:any=false;
  public show: any = null;
  constructor(
    public ethereumService:EthereumService,
    public provider: Provider,
    public bookingService: BookingService,
    public checkinService: CheckinService,
    public emailService: EmailService
  ) {
  }
  test(){
    
    this.ethereumService.getBlockchain().subscribe((data) => {
      console.log('data', data);
  },
  (error) => {
      alert("Login not Succesfull")
  });
  }
  convert(val){
    var get = 'not found'
  for (var i = 0; i < this.provider.rawData.length; i++) {
    var obj = this.provider.rawData[i];
    if (obj.iata === val) {
      get = obj.name;
      break;
    }
  }
  return get;

}
  checkin(flightid, userid,src,dest) {
    this.loading = true;
    console.log(flightid, userid);
    this.checkinService.checkin(flightid, userid).subscribe(
      data => {
        this.bookingService
          .listBookingByUser(this.provider.userData.data.USERID)
          .subscribe(
            data => {
              this.loading = false
              console.log('data', data);
              this.show = data;
              var newsrc = this.convert(src);
              var newdest = this.convert(dest);
              console.log('srcccccccc',newsrc,newdest)
              this.emailService
              .postEmail(this.provider.userData.data.EMAIL,newsrc,newdest)
              .subscribe(
                data => {

        
                },
                error => {
                  this.loading = false
                  console.log(error);
                }
              );
    
            },
            error => {
              this.loading = false
              console.log(error);
            }
          );
      },
      error => {
        this.loading = false
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loading = true;
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem('token'));
    }
    this.bookingService
      .listBookingByUser(this.provider.userData.data.USERID)
      .subscribe(
        data => {
          this.loading = false
          console.log('data', data);
          this.show = data;
        },
        error => {
          this.loading = false
          console.log(error);
        }
      );
  }
}
