import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'image-gallery',
    loadChildren: () => import('./image-gallery/image-gallery.module').then( m => m.ImageGalleryPageModule)
  },
  {
    path: ':roomId',
    loadChildren: () => import('./room-detail/room-detail.module').then( m => m.RoomDetailPageModule)
  },
  {
    path: 'booking-form',
    loadChildren: () => import('./booking-form/booking-form.module').then( m => m.BookingFormPageModule)
  },
  {
    path: 'payment-form',
    loadChildren: () => import('./payment-form/payment-form.module').then( m => m.PaymentFormPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
