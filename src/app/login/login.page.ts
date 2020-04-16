import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // isLogin =  true;
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(private authService: AuthService,
              private router: Router,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder) {
                this.loginForm = this.formBuilder.group({
                  email: ['', Validators.compose([Validators.required, Validators.email])],
                  password: [
                    '',
                    Validators.compose([Validators.required, Validators.minLength(6)])
                  ]
                });
               }

  ngOnInit() {
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
  goForgotPassword() {
    this.router.navigate(['/reset-password']);
  }

  // onLogin() {
  //   this.authService.login();
  //   this.loadingCtrl.create({
  //     message: 'Logging in...'
  //   }).then(loadingEl => {
  //     loadingEl.present();
  //     // FAKE DELAYED RESPONSE TIME
  //     setTimeout(() => {
  //       loadingEl.dismiss();
  //       this.router.navigateByUrl('/district');
  //     }, 1500);
  //   });
  // }

  // onSubmit(form: NgForm) {
  //   if (!form.valid) {
  //     return;
  //   }
  //   // console.log(form);
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   console.log(email, password);

  //   if (this.isLogin) {
  //     // Send a request to the login servers
  //   } else {
  //     // Send a request to the sign up / registration servers
  //   }
  // }

  // onSwitchAuthMode() {
  //   this.isLogin = !this.isLogin;
  // }

  async loginUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      this.authService.loginUser(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl('district');
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            await alert.present();
          });
        }
      );
    }
  }

}
