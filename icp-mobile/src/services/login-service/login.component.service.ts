import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Provider } from '../../provider/provider';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
 
    public parameters: any;
    public params: any;
    public temp:any;
    public _url: any = "../assets/airports.json";
    public getJSON() {
        return this.http
          .get(this._url)
          .map((response: Response) => response.json());
      }

    public constructor(public http: Http, public provider:Provider) {
        this.parameters = {};
        this.params = {};
        this.getJSON().subscribe(data => {
            this.provider.rawData = data;
          });
    }

    public login(email,password): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.login
        const bodyObject = {
            email:email,
            password:password
        }
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}