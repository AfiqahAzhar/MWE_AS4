import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomDetailPage } from './room-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RoomDetailPage
  },
  {
    path: 'edit-room',
    loadChildren: () => import('./edit-room/edit-room.module').then( m => m.EditRoomPageModule)
  },
  {
    path: 'new-room',
    loadChildren: () => import('./new-room/new-room.module').then( m => m.NewRoomPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomDetailPageRoutingModule {}
