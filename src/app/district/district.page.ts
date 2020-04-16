import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.page.html',
  styleUrls: ['./district.page.scss'],
})
export class DistrictPage implements OnInit {

  public loading: HTMLIonLoadingElement;

  constructor(
              private authService: AuthService,
              public loadingCtrl: LoadingController,
              private router: Router,
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
