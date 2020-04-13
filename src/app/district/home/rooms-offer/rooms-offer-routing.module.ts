import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsOfferPage } from './rooms-offer.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsOfferPageRoutingModule {}
