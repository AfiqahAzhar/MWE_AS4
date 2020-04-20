import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { Camera } from '@ionic-native/camera/ngx';
=======
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
>>>>>>> 013fea60fb8237886f7cecb7103b53b8b935020f


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Storage,
<<<<<<< HEAD
=======
    BarcodeScanner
>>>>>>> 013fea60fb8237886f7cecb7103b53b8b935020f
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
