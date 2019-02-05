import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { OffersPage } from '../pages/offers/offers';
import { SignupPage } from '../pages/signup/signup';
import { BookingPage } from '../pages/booking/booking';
import {MapPage} from '../pages/map/map'
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginService} from '../services/login-service/login.component.service'
import {SignupService} from '../services/signup-service/signup.component.service'
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DashboardService} from '../pages/dashboard/dashboard.service'
import {Provider} from '../provider/provider'
import {ListingService} from '../services/listing-schedule-service/listing.component.service'
import { SharedModule } from '../shared/shared.module';
import {BookingService} from '../services/booking-service/booking.component.service'
import {ChatService} from '../services/chat-service/chat.component.service'
import {EmailService} from '../services/email-service/email.component.service'
import {CheckinService} from '../services/checkin-service/checkin.component.service'
import {NativeHttpWrapper} from 'ionic-native-http-angular-wrapper';
import { Geolocation } from "@ionic-native/geolocation";
import {OdmService} from '../services/odm-service/odm.component.service'
import {ChatPage} from '../pages/chat/chat'
import 'leaflet-routing-machine';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    BookingPage,
    DashboardPage,
    MapPage,
    OffersPage,
    ChatPage
  ],
  imports: [
    NativeHttpWrapper,
    SharedModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    BookingPage,
    DashboardPage,
    MapPage,
    OffersPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardService,
    LoginService,
    SignupService,
    Provider,
    ListingService,
    BookingService,
    CheckinService,
    Geolocation,
    EmailService,
    OdmService,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
