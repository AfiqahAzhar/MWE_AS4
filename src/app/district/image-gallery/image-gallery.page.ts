import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Room } from '../room.model';
import { Subscription } from 'rxjs';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  private roomSub: Subscription;
  room: Room;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private roomsService: RoomService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('roomId')) {
        this.navCtrl.navigateBack('/disrict/tabs/home');
        return;
      }
      this.roomSub = this.roomsService.getRoom(paramMap.get('roomId')).subscribe(room => {
        this.room = room;
      });
    });
  }

}
