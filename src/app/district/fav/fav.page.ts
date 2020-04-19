import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { Room } from '../room.model';
import { IonItemSliding } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  listedLoadedRooms: Room[];
  favourites = [];

  constructor(public userData: UserdataService,
              public router: Router,
              public storage: Storage) { }

  ngOnInit() {
  }



}
