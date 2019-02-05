
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import { Provider } from '../../provider/provider';
import 'rxjs/Rx';

@Injectable()
export class ListingService {
    public constructor(public http: Http, public provider:Provider) {
    }

    public listFlights(Year,Month,DayOfMonth,Origin,Dest): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.listFlights
        const bodyObject = {
            Year:Year,
            Month:Month,
            DayOfMonth:DayOfMonth,
            origin:Origin,
            dest:Dest
        }
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listAllFlights(): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.listAllFlights
        return this.http.post(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listFlightsByID(ID): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.listFlightsByID+'/'+String(ID)
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}