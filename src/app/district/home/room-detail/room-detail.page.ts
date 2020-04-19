import { Component, OnInit, OnDestroy} from '@angular/core';
import { RoomService } from '../../room.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../room.model';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit, OnDestroy {

  isBookable = false;
  room: Room;
  private roomSub: Subscription;

  constructor(private roomsService: RoomService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              private loadingCtrl: LoadingController,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('roomId')) {
        this.navCtrl.navigateBack('/disrict/tabs/home');
        return;
      }
      this.roomSub = this.roomsService.getRoom(paramMap.get('roomId')).subscribe(room => {
        this.room = room;
        this.isBookable = room.userId !== this.authService.$userId;
      });
    });
  }

  ionViewWillEnter() {
    this.roomsService.fetchRoom().subscribe();
  }

  ngOnDestroy() {
    if (this.roomSub) {
      this.roomSub.unsubscribe();
    }
  }

  getBook() {
    this.navCtrl.navigateBack('/district/tabs/home/booking-form');
  }

}
