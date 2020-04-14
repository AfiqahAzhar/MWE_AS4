import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedRooms: Room[];

  constructor(private roomsService: RoomService) { }

  ngOnInit() {
    this.loadedRooms = this.roomsService.$rooms;
  }


}
