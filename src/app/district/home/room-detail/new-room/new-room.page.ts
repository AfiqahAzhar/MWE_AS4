import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RoomService } from 'src/app/district/room.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  form: FormGroup;

  constructor(private roomsService: RoomService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(null, ),
      guest: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      bedroom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      kitchen: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      park: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl (null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl (null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateRoom() {
    this.loadingCtrl.create({
      message: 'Creating room...'
    }).then(loadingEl => {
      loadingEl.present();
      this.roomsService.addRoom(this.form.value.title,
        this.form.value.guest,
        this.form.value.bedroom,
        this.form.value.kitchen,
        this.form.value.park,
        this.form.value.description,
        this.form.value.price).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['district/tabs/home']);
        });
    });
  }

}
