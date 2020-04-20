import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { AuthService } from '../login/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface RoomData {
  price: number;
  description: string;
  park: number;
  bedroom: number;
  kitchen: number;
  guest: number;
  image: string;
  title: string;
  userId: string;
}


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms = new BehaviorSubject<Room[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) { }

  get $rooms() {
    return this.rooms.asObservable();
  }

  getRoom(id: string) {
    return this.$rooms.pipe(take(1), map (rooms => {
      return { ...rooms.find(r => r.id === id) };
    }));
  }

  fetchRoom() {
    return this.http.get<{[key: string]: RoomData }>('https://sweetroom-839be.firebaseio.com/offered-rooms.json')
                    .pipe(map(resData => {
                      const rooms = [];
                      for (const key in resData) {
                        if (resData.hasOwnProperty(key)) {
                          rooms.push(new Room(key,
                                                resData[key].title,
                                                resData[key].image,
                                                resData[key].guest,
                                                resData[key].bedroom,
                                                resData[key].kitchen,
                                                resData[key].park,
                                                resData[key].description,
                                                resData[key].price,
                                                resData[key].userId));
                        }
                      }
                      return rooms;
                    }), tap(rooms => {
                      this.rooms.next(rooms);
                    }));
  }

  addRoom(title: string, guest: number, bedroom: number, kitchen: number, park: number, description: string, price: number) {
    let generatedId: string;
    const newRoom = new Room(Math.random().toString(),
                              title,
                              // tslint:disable-next-line: max-line-length
                              'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                              guest,
                              bedroom,
                              kitchen,
                              park,
                              description,
                              price,
                              this.authService.$userId
                              );
    return this.http.post<{ name: string }>('https://sweetroom-839be.firebaseio.com/offered-rooms.json', {...newRoom, id: null})
               .pipe(switchMap(resData => {
                 generatedId = resData.name;
                 return this.rooms;
               }), take(1), tap(rooms => {
                newRoom.id = generatedId;
                this.rooms.next(rooms.concat(newRoom));
                console.log(newRoom);
               }));
  }

  // tslint:disable-next-line: max-line-length
  updateRoom(roomId: string, title: string, image: string, guest: number, bedroom: number, kitchen: number, park: number, description: string, price: number) {
    let updatedRooms: Room[];
    return this.$rooms.pipe(take(1), switchMap(rooms => {
      const updatedRoomIndex = rooms.findIndex(room => room.id === roomId);
      updatedRooms = [...rooms];
      const oldRoom = updatedRooms[updatedRoomIndex];
      // tslint:disable-next-line: max-line-length
      updatedRooms[updatedRoomIndex] = new Room(oldRoom.id, title, oldRoom.image, oldRoom.guest, oldRoom.bedroom, oldRoom.kitchen, oldRoom.park, description, oldRoom.price, oldRoom.userId);
      this.rooms.next(updatedRooms);
      // tslint:disable-next-line: max-line-length
      return this.http.put(`https://sweetroom-839be.firebaseio.com/offered-rooms/${roomId}.json`, {...updatedRooms[updatedRoomIndex], id: null});
    }), tap(resData => {
      this.rooms.next(updatedRooms);
    }));
  }

  deleteRoom(roomId: string) {
    return this.http
              .delete(`https://sweetroom-839be.firebaseio.com/offered-rooms/${roomId}.json`)
              .pipe(switchMap(() => {
                return this.$rooms;
              }), take(1), tap(rooms => {
                this.rooms.next(rooms.filter(o => o.id !== roomId));
              }));
  }

}
