
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import { Provider } from '../../provider/provider';
import 'rxjs/Rx';

@Injectable()
export class EmailService {
    public constructor(public http: Http, public provider:Provider) {
    }

    public postEmail(toemail,src,dest): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.email
        const bodyObject = {
                toemail,
                src,
                dest,  
        }
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => {"success"})
            .catch((error: any) => {
                console.log(error);
                return Observable.throw({"error":"you have a error"});
            });
    }
}