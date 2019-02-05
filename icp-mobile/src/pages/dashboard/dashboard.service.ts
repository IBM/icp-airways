
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import { Provider } from '../../provider/provider'
import 'rxjs/Rx';

@Injectable()
export class DashboardService {
    public constructor(public http: Http, public provider:Provider) {
    }

    public list(lat,long): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = this.provider.apiUrl.map
        console.log('linkkk',link)
        const bodyObject = {
            lat,
            long
          };
          console.log('bodyyyy',bodyObject)
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}