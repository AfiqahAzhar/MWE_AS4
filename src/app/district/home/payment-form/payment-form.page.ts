import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.page.html',
  styleUrls: ['./payment-form.page.scss'],
})
export class PaymentFormPage implements OnInit {
  form: FormGroup;

  constructor(private homeService: HomeService,
              private router: Router,
              private loadingCtrl: LoadingController,
              private alertController: AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      cardHolderName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      cardNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      expiry: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      cvc: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(3)]
      })
    });
  }

async onCreatePayment() {
    if (!this.form.valid) {
      return;
    }

    this.homeService.addPayment(
      this.form.value.cardHolderName,
      this.form.value.cardNumber,
      this.form.value.expiry,
      this.form.value.cvc);

    const alert = await this.alertController.create({
      message: 'Successful booking!!',
      buttons: ['OK'],
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    this.router.navigate(['/district/tabs/home']);
  }
}
