import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Provider } from "../../provider/provider";
import "rxjs/Rx";

@Injectable()
export class ChatService {
  public constructor(public http: Http, public provider: Provider) {}

  public call(text, session_id): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.watsoncall;
    const bodyObject = {
      text,
      session_id
    };
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public getsessionid(): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.getsessionid;
    console.log('log of url',link)
    return this.http
      .get(link, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
}
