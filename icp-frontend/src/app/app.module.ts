import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { Provider } from './provider/provider';
import { LoginService } from './login/login.component.service';
import { SignupService } from './signup/signup.component.service';
import { ListingService } from './services/listing-schedule-service/listing.component.service';
import { BookingService } from './services/booking-service/booking.component.service';
import { CheckinService } from './services/checkin-service/checkin.component.service';
import { AuthGuardService } from './guards/login-guard.service';
import { AuthService } from './services/auth/auth-service';
import { LandingComponent } from './landing/landing.component';
import { SlideAuthComponent } from './slide-auth/slide-auth.component';
import { EthereumService } from './services/ethereum-service/ethereum.component.service';
import { OdmService } from './services/odm-service/odm.component.service';
import { MaterializeModule } from "angular2-materialize";
import { OdmDetailComponent } from './odm-detail/odm-detail.component';
import { EmailService } from './services/email-service/email.component.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HistoryComponent,
    LandingComponent,
    SlideAuthComponent,
    OdmDetailComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ROUTING,
    RouterModule,
    SharedModule
  ],
  providers: [
    Provider,
    SignupService,
    LoginService,
    ListingService,
    BookingService,
    CheckinService,
    AuthGuardService,
    EthereumService,
    EmailService,
    OdmService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
