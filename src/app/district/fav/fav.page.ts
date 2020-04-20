import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room.model';
import { FavService } from 'src/app/fav.service';
import { Subscription } from 'rxjs';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit, OnDestroy {
  private roomsSub: Subscription;
  favourites: Room[] = [];

  constructor(
              public router: Router,
              private favService: FavService,
              private roomsService: RoomService
            ) { }

  ngOnInit() {
    this.favourites = this.favService.getCart();
  }

  ionViewWillEnter() {
    this.roomsService.fetchRoom().subscribe();
  }

  ngOnDestroy(): void {
    if (this.roomsSub) {
      this.roomsSub.unsubscribe();
    }
  }


}
