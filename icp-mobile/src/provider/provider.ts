import { Injectable } from "@angular/core";
@Injectable()
export class Provider {
  public apiUrl: any;
  public userData: any = null;
  public token: any = null;
  public rawData: any = null;
  public url: any = "10.150.20.151:31380";
  public abi: any;
  constructor() {
    this.apiUrl = {
      login: "http://" + this.url + "/loginsvc/login",
      signup: "http://" + this.url + "/loginsvc/createUser",
      book: "http://" + this.url + "/bookingsvc/book",
      listBookingByUser:
        "http://" + this.url + "/bookingsvc/listBookingByUser",
      checkin: "http://" + this.url + "/bookingsvc/checkin",
      listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
      listFlights: "http://" + this.url + "/listingsvc/searchFlights",
      listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
      map:  "http://" + this.url + "/mapsvc/getMap",
      email: 'http://' +this.url + "/celerysvc/postEmail",
      odm: 'http://' +this.url + "/odmsvc/odm",
      watsoncall: 'http://' +this.url + "/aisvc/watson",
      getsessionid:'http://' +this.url + "/aisvc/session"
    };
  }
}
