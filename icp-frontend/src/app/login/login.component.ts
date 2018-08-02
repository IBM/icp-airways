import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.component.service'
import { Provider } from '../provider/provider';
import { RouterModule, Routes, Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode'
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;
  public read:any;
  constructor(public loginService:LoginService,  public provider:Provider, public router: Router) {

   }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.email,this.password).subscribe((data) => {
      console.log('data', data);
      this.read=data;
      this.read = this.read['token']
      this.provider.token = this.read;
      localStorage.setItem('token',this.provider.token);
      this.provider.userData=jwtDecode(this.read);
      this.router.navigateByUrl('/history');
  },
  (error) => {
      alert("Login not Succesfull")
      this.provider.userData=null;
  });
  }

}
