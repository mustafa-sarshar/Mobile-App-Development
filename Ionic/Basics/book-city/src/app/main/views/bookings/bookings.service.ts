import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Booking } from "./definitions/booking.model";

@Injectable()
export class BookingsService {
  public bookings: BehaviorSubject<Booking[]> = new BehaviorSubject([
    new Booking("0001", "The best summer place", "0001", "0001", 5),
  ]);

  constructor() {}

  public getBookings() {
    return this.bookings.getValue().slice();
  }

  public setBookings(bookings: Booking[]) {
    this.bookings.next(bookings.slice());
  }

  public deleteBookingById(bookingId: string) {
    const bookingsUpdate = this.getBookings().filter(
      (booking: Booking) => booking._id !== bookingId,
    );

    this.setBookings(bookingsUpdate);
  }
}
