import { Component, OnInit, OnDestroy} from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room.model';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  loadedRooms: Room[];
  listedLoadedRooms: Room[];
  private roomsSub: Subscription;

  constructor(private roomsService: RoomService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.roomsSub = this.roomsService.$rooms.subscribe(rooms => {
      this.loadedRooms = rooms;
      this.listedLoadedRooms = this.loadedRooms;
    });
  }

  ionViewWillEnter() {
    this.roomsService.fetchRoom().subscribe();
  }

  onEdit(roomId: string, itemSliding: IonItemSliding) {
    itemSliding.close();
    this.router.navigate(['/district/tabs/home/edit/', roomId]);
    console.log('Editing item:', roomId);
  }

  onDelete(roomId: string, itemSliding: IonItemSliding) {
    itemSliding.close();
    this.loadingCtrl.create({
      message: 'Deleting room...'
    }).then(loadingEl => {
      loadingEl.present();
      this.roomsService.deleteRoom(roomId).subscribe(() => {
        loadingEl.dismiss();
      });
    });
  }

  ngOnDestroy(): void {
    if (this.roomsSub) {
      this.roomsSub.unsubscribe();
    }
  }


}
