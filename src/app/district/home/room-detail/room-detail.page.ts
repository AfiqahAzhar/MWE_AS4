import { Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import { RoomService } from '../../room.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../room.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import { FavService } from 'src/app/fav.service';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit, OnDestroy {

  isBookable = false;
  room: Room;
  private roomSub: Subscription;
  cart = [];

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private roomsService: RoomService,
              private navCtrl: NavController,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private favService: FavService) { }

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

    this.cart = this.favService.getCart();
  }

  ionViewWillEnter() {
    this.roomsService.fetchRoom().subscribe();
  }

  ngOnDestroy() {
    if (this.roomSub) {
      this.roomSub.unsubscribe();
    }
  }

  gotobooking() {
    this.router.navigate(['/district/tabs/booking-form']);
}

  gotogallery() {
  this.router.navigate(['/district/tabs/image-gallery']);
}

  addToFav(room) {
    this.favService.addProduct(room);
    console.log(room);
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
