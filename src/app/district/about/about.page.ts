import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public loading: HTMLIonLoadingElement;

  constructor(
              private authService: AuthService,
              public loadingCtrl: LoadingController,
              private router: Router
  ) { }

  ngOnInit() {
  }

  async logoutUser(): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.authService.logoutUser().then(
      () => {
        this.loading.dismiss().then(() => {
          this.router.navigateByUrl('login');
        });
      });
  }
}
