import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {
  form: FormGroup;

  constructor(private homeService: HomeService,
              private router: Router,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      ic: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phoneno: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(7)]
      }),
      availableFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      availableTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/district/tabs/home']);
  }

  onCreateBooking() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Proceed to Payment...'
    }).then(loadingEl => {
      loadingEl.present();
      this.homeService.addBooking(
          this.form.value.name,
          this.form.value.ic,
          this.form.value.phoneno,
          this.form.value.availableFrom,
          this.form.value.availableTo);
      setTimeout(() => {
        this.router.navigate(['/district/tabs/payment-form']);
        this.form.reset();
        loadingEl.dismiss();
          }, 4000);
    });
  }
}
