import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
})
export class RoomDetailPage implements OnInit {

  room: Room;

  constructor(private roomsService: RoomService,
              private navCtrl: NavController,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
