import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
import { Provider } from '../../provider/provider';
import 'rxjs/Rx';

@Injectable()
export class SignupService {
 
    public parameters: any;
    public params: any;
    public temp:any;

    public constructor(public http: Http, public provider:Provider) {
        this.parameters = {};
        this.params = {};
    }

    public signup(firstName,lastName,age,email,password,location,tier): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const link = this.provider.apiUrl.signup
        const bodyObject = {
            'firstName':firstName,
            'lastName':lastName,
            'age':Number(age),
            'email':email,
            'password':password,
            'location':location,
            'tier':tier
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