import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingFormPageRoutingModule } from './booking-form-routing.module';

import { BookingFormPage } from './booking-form.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BookingFormPageRoutingModule
  ],
  declarations: [BookingFormPage]
})
export class BookingFormPageModule {}
