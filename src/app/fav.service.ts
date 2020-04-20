import { Injectable } from '@angular/core';
import { Room } from './district/room.model';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private room = Room;
  private cart = [];

  constructor() { }

  getRooms() {
    return this.room;
  }

  getCart() {
    return this.cart;
  }

  addProduct(room) {
    this.cart.push(room);
  }
}
