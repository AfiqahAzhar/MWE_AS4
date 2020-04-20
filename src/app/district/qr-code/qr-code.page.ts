import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http';
import { Booking} from '../home/home.model';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  elementType = 'url';
  qrdata = null;
  input = null;
  inputOne = null;
  items = [];

  // tslint:disable-next-line: max-line-length
  constructor(private barcodeScanner: BarcodeScanner, private toastController: ToastController, private router: Router, private homeService: HomeService, private http: HttpClient) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/district/tabs/home']);
  }

  fetchBooking() {
    if (this.input !== null && this.inputOne !== null){
      this.qrdata =  this.input + this.inputOne;
    }

}

}
