import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
favorites: string[] = [];

  constructor() { }

  hasFavorite(roomName: string): boolean {
    return (this.favorites.indexOf(roomName) > -1);
  }

  addFavorite(roomName: string): void {
    this.favorites.push(roomName);
  }

  removeFavorite(roomName: string): void {
    const index = this.favorites.indexOf(roomName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

}
