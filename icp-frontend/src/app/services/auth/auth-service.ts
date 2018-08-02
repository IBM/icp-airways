import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(token === null || token === undefined){
        return false
    }
    else{
    return true
    }
  }
}