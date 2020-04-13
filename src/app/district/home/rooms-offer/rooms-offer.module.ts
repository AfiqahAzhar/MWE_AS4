import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsOfferPageRoutingModule } from './rooms-offer-routing.module';

import { RoomsOfferPage } from './rooms-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsOfferPageRoutingModule
  ],
  declarations: [RoomsOfferPage]
})
export class RoomsOfferPageModule {}
