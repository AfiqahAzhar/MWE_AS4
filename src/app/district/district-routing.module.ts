import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictPage } from './district.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: DistrictPage,
    children: [
      {
        path: 'fav',
        loadChildren: () => import('./fav/fav.module').then( m => m.FavPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
        path: 'image-gallery/:roomId',
        loadChildren: () => import('./image-gallery/image-gallery.module').then( m => m.ImageGalleryPageModule)
      },
      {
        path: 'qr-code',
        loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
      {
        path: '',
        redirectTo: '/district/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/district/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictPageRoutingModule {}
