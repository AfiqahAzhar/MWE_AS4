import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  room: Room;

  constructor() { }

  ngOnInit() {
  }

}
