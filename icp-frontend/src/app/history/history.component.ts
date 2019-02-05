import { Component, OnInit } from "@angular/core";
import { Provider } from "../provider/provider";
import { BookingService } from "../services/booking-service/booking.component.service";
import { CheckinService } from "../services/checkin-service/checkin.component.service";
import { EthereumService } from "../services/ethereum-service/ethereum.component.service";
import { EmailService } from "../services/email-service/email.component.service";
import * as iso from "iso-3166-1";
const axios = require("axios");

import * as jwtDecode from "jwt-decode";
import "rxjs/Rx";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  public loading: any = false;
  public show: any = null;
  constructor(
    public ethereumService: EthereumService,
    public provider: Provider,
    public bookingService: BookingService,
    public checkinService: CheckinService,
    public emailService: EmailService
  ) {}
  test() {
    // this.ethereumService.getBlockchain().subscribe(
    //   data => {
    //     console.log("data", data);
    //   },
    //   error => {
    //     alert("Login not Succesfull");
    //   }
    // );
  }
  convert(val) {
    var get = "not found";
    for (var i = 0; i < this.provider.rawData.length; i++) {
      var obj = this.provider.rawData[i];
      if (obj.iata === val) {
        get = obj.name;
        break;
      }
    }
    return get;
  }
  checkin(bookingid, userid) {
    this.loading = true;
    this.checkinService.checkin(bookingid, userid).subscribe(
      data => {
        console.log('dataaaa',data)
        this.bookingService
          .listBookingByUser(this.provider.userData.data.USERID)
          .subscribe(
            data => {
              this.loading = false;
            },
            error => {
              this.loading = false;
              console.log(error);
            }
          );
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loading = true;
    if (!this.provider.userData) {
      this.provider.userData = jwtDecode(localStorage.getItem("token"));
    }
    this.bookingService
      .listBookingByUser(this.provider.userData.data.USERID)
      .subscribe(
        data => {
          var temp  = JSON.parse(JSON.stringify(data));
          console.log("data", data);
          const url = "http://10.150.20.151:31380/listingsvc/listFlights/";
          const getData = async (url,iter) => {
            try {
              const response = await axios.get(url);
              const dataa = response.data;
              console.log(dataa);
              Object.assign(temp[iter], {
                flight: dataa
              });
            } catch (error) {
              this.loading = false;
              console.log(error);
            }
          };
          for (var iter = 0; iter < data.length; iter++) {
          getData(url+data[iter]['FlightID'],iter);
          if(iter === data.length-1)
            {
              this.show = temp;
              console.log('showwwwwww',this.show)
            }
          }
          this.loading = false;
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }
}
