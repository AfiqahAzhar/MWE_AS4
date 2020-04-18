import { Injectable } from '@angular/core';
import { Booking, Payment } from './home/home.model';
import { AuthService } from '../login/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private authService: AuthService, private http: HttpClient) { }

  addBooking(name: string, ic: string, phoneno: string,  availableFrom: Date, availableTo: Date) {
    const newRoom = new Booking(
      Math.random().toString(),
      name,
      ic,
      phoneno,
      availableFrom,
      availableTo
    );
    this.http.post('https://sweetroom-839be.firebaseio.com/user-booking-detail.json', {...newRoom, id: null}).subscribe(data => {
      console.log('success');
     }, error => {
      console.log(error);
    });
  }

  addPayment(cardHolderName: string, cardNumber: string, expiry: Date,  cvc: number) {
    const newPayment = new Payment(
      Math.random().toString(),
      cardHolderName,
      cardNumber,
      expiry,
      cvc
    );
    this.http.post('https://sweetroom-839be.firebaseio.com/user-payment-detail.json', {...newPayment, id: null}).subscribe(data => {
      console.log('success');
     }, error => {
      console.log(error);
    });
  }


}
