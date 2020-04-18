import { Injectable } from '@angular/core';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms: Room [] = [
    new Room ('r1',
              'Beryl',
              '',
              2,
              1,
              0,
              1,
              // tslint:disable-next-line: max-line-length
              'Small little room for 2 maximum guest only with a cupboard enough to fit all your stuff. Vanity mirror, small desk and toilet available.',
              15.00),
    new Room ('r2',
              'Sapphire',
              '',
              4,
              2,
              1,
              1,
              '',
              30.00),
    new Room ('r3',
              'Amber',
              '',
              6,
              3,
              2,
              2,
              '',
              50.00)
  ];

  constructor() { }

  get $rooms() {
    return [...this.rooms];
  }
}
