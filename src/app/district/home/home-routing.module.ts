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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
