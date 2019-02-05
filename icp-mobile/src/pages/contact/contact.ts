import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Provider } from '../../provider/provider'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  constructor(public navCtrl: NavController, public provider:Provider) {

  }

  // logout(){
  //   this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'backward'});
  // }
}
