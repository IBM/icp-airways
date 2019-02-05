import { Component } from '@angular/core';
import { Platform , Keyboard} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  showSplash = true;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public keyboard: Keyboard 
    ) {
    platform.ready().then(() => {
       
      console.log = function(){};
      statusBar.styleDefault();
      splashScreen.hide();
      timer(1000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }
}
