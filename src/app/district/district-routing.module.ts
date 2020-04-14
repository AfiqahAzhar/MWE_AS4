import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictPage } from './district.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictPage
  },
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
  },  {
    path: 'booking-form',
    loadChildren: () => import('./booking-form/booking-form.module').then( m => m.BookingFormPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictPageRoutingModule {}
