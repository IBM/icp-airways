import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingPage } from './booking';

@NgModule({
  declarations: [
    BookingPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingPage),
  ],
})
export class BookingPageModule {}
