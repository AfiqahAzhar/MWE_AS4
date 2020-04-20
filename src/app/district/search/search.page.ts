import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  term = '';
  room: Room[];
  private roomsSub: Subscription;

  constructor(private roomsService: RoomService,
              private router: Router) { }

  ngOnInit() {
    this.roomsSub = this.roomsService.$rooms.subscribe(rooms => {
      this.room = rooms;
    });
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
