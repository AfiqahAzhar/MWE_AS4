import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogin =  true;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  goHomePage() {
    this.router.navigate(['/district']);
  }

  onLogin() {
    this.authService.login();
    this.loadingCtrl.create({
      message: 'Logging in...'
    }).then(loadingEl => {
      loadingEl.present();
      // FAKE DELAYED RESPONSE TIME
      setTimeout(() => {
        loadingEl.dismiss();
        this.router.navigateByUrl('/district');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // Send a request to the login servers
    } else {
      // Send a request to the sign up / registration servers
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

}
