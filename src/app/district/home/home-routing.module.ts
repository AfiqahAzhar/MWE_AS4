import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'rooms-offer',
    loadChildren: () => import('./rooms-offer/rooms-offer.module').then( m => m.RoomsOfferPageModule)
  },
  {
    path: 'room-detail',
    loadChildren: () => import('./room-detail/room-detail.module').then( m => m.RoomDetailPageModule)
  },
  {
    path: 'booking-form',
    loadChildren: () => import('./booking-form/booking-form.module').then( m => m.BookingFormPageModule)
  },
  {
    path: 'payment-form',
    loadChildren: () => import('./payment-form/payment-form.module').then( m => m.PaymentFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
