import { Component, OnInit } from '@angular/core';
import { translateTrigger, slideTrigger } from '../animations';
import { LoginService } from '../login/login.component.service';
import { SignupService } from '../signup/signup.component.service';
import { Provider } from '../provider/provider';
import { RouterModule, Routes, Router } from '@angular/router';
import { EthereumService } from '../services/ethereum-service/ethereum.component.service'
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { NgModule } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
declare let require: any;
declare let window: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [translateTrigger]
})
export class LandingComponent implements OnInit {
  public loading:any=false;
  email: String;
  tier: String
  password: String;
  public read: any;
  public displayHeading = false;
  public isLeftVisible = true;
  emailSignup: String;
  firstName: String;
  lastName: String;
  location: String;
  age: Number;
  passwordSignup: String;
  public modalData = ['GOLD', 'SILVER', 'BRONZE'];
  constructor(
    public ethereumService:EthereumService,
    public loginService: LoginService,
    public provider: Provider,
    public router: Router,
    public signupService: SignupService
  ) {


    setTimeout(() => {
      this.displayHeading = true;
    }, 1000);
  }
  ngOnInit() { }
  test() {
  //   this.ethereumService.getBlockchain().subscribe((data) => {
  //     console.log('data', data);
  // },
  // (error) => {
  //     alert("Login not Succesfull")
  // });
  }
  login() {
    this.loading = true;
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        console.log('data', data);
        this.read = data;
        this.read = this.read['token'];
        this.provider.token = this.read;
        localStorage.setItem('token', this.provider.token);
        this.provider.userData = jwtDecode(this.read);
        this.loading = false;
        this.router.navigateByUrl('/history');
      },
      error => {
        this.loading = false;
        this.provider.userData = null;
        alert('Login not Succesfull');

      }
    );
  }

  signup() {
    this.loading = true;
    this.signupService
      .signup(
        this.firstName,
        this.lastName,
        this.age,
        this.emailSignup,
        this.passwordSignup,
        this.location,
        this.tier
      )
      .subscribe(
        data => {
          this.loading = false;
          console.log('data', data);
          this.read = data;
          alert('Signup sucessfull');
        },
        error => {
          this.loading = false;
          console.log(error);
          alert('signup not sucessfull');
        }
      );
  }
}
