import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { QrCodePage } from './qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxQRCodeModule],
  exports: [RouterModule],
})
export class QrCodePageRoutingModule {}
