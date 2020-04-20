import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  loading;
  currentImage;
  selectedPhoto;
  storageRef = firebase.storage().ref();
  starsRef = this.storageRef.child('photos/gallery1.jpg');

constructor(private camera: Camera,
            private loadingCtrl: LoadingController) { }

ngOnInit() {
  }

grabPicture() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl;
      this.loading.present();

      this.selectedPhoto = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);

      this.upload();
    }, (err) => {
      console.log('error', err);
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

upload() {
    if (this.selectedPhoto) {
      const uploadTask = firebase.storage().ref().child('photos/gallery')
      .put(this.selectedPhoto);
      uploadTask.then(this.onSuccess, this.onError);
    }
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
