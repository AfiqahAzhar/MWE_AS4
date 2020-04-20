import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { LoadingController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  @Output() imagePick = new EventEmitter<string>();

  loading;
  currentImage;
  selectedImage: string;
  storageRef = firebase.storage().ref();
  starsRef = this.storageRef.child('photos/gallery1.jpg');

constructor(
            private loadingCtrl: LoadingController) { }

ngOnInit() {
  }

grabPicture() {
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 200,
      width: 200,
      resultType: CameraResultType.DataUrl
    }).then(image => {
      this.selectedImage =  image.dataUrl;
      this.imagePick.emit(image.dataUrl);
    }).catch(error => {
      console.log(error);
      return false;
    });
  }

dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

onSuccess = snapshot => {
    this.currentImage = snapshot.downloadURL;
    this.loading.dismiss();
  }

onError = error => {
    console.log('error', error);
    this.loading.dismiss();
  }
}
