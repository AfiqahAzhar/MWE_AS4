import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: ':roomId',
    loadChildren: () => import('./room-detail/room-detail.module').then( m => m.RoomDetailPageModule)
  },
  {
    path: 'edit/:roomId',
    loadChildren: () => import('./edit-room/edit-room.module').then( m => m.EditRoomPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
