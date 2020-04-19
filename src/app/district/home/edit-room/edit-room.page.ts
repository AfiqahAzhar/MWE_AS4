import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from 'src/app/district/room.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { RoomService } from 'src/app/district/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.page.html',
  styleUrls: ['./edit-room.page.scss'],
})
export class EditRoomPage implements OnInit, OnDestroy {
  form: FormGroup;
  room: Room;
  private roomSub: Subscription;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private roomsService: RoomService,
              private router: Router,
              private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('roomId')) {
        this.navCtrl.navigateBack('/district/tabs/home');
        return;
      }
      this.roomSub = this.roomsService.getRoom(paramMap.get('roomId')).subscribe(room => {
      this.room = room;
      });
    });

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
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

ngOnDestroy() {
  if (this.roomSub) {
    this.roomSub.unsubscribe();
  }
}

onEditRoom() {
  // if (!this.form.valid) {
  //   return;
  // }
  this.loadingCtrl.create({
    message: 'Updating room...'
  }).then(loadingEl => {
    loadingEl.present();
    // tslint:disable-next-line: max-line-length
    this.roomsService.updateRoom(
      this.room.id,
      this.form.value.title,
      this.form.value.image,
      this.form.value.guest,
      this.form.value.bedroom,
      this.form.value.kitchen,
      this.form.value.park,
      this.form.value.description,
      this.form.value.price).subscribe(() => {
      loadingEl.dismiss();
      this.form.reset();
      this.router.navigateByUrl('/district/tabs/home');
    });
  });
}

}
