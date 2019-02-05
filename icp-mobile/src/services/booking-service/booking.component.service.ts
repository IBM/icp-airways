import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Provider } from "../../provider/provider";
import "rxjs/Rx";

@Injectable()
export class BookingService {
  public constructor(public http: Http, public provider: Provider) {}

  public booking(
    UserID,
    FlightID,
    OfferNamePricing,
    OfferTypePricing,
    CostPricing,
    OfferNameUpgrade,
    OfferTypeUpgrade,
    CostUpgrade
  ): Observable<any> {
    console.log(
      UserID,
      FlightID,
      OfferNamePricing,
      OfferTypePricing,
      CostPricing,
      OfferNameUpgrade,
      OfferTypeUpgrade,
      CostUpgrade
    );
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.provider.token
      })
    });
    const link = this.provider.apiUrl.book;
    const bodyObject = {
      UserID,
      FlightID,
      OfferNamePricing,
      OfferTypePricing,
      CostPricing,
      OfferNameUpgrade,
      OfferTypeUpgrade,
      CostUpgrade
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public listBookingByUser(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.provider.token
      })
    });
    const link = this.provider.apiUrl.listBookingByUser + "/" + String(ID);
    return this.http
      .get(link, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
}
