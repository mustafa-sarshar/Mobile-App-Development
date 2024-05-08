import { Component, OnDestroy, OnInit } from "@angular/core";
import { IonItemSliding } from "@ionic/angular";

import { BookingsService } from "./bookings.service";
import { Booking } from "./definitions/booking.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"],
})
export class BookingsPage implements OnInit, OnDestroy {
  public bookings?: Booking[];
  private _bookingsSubscription?: Subscription;

  constructor(private readonly _bookingsService: BookingsService) {}

  public ngOnInit() {
    this._bookingsSubscription = this._bookingsService.bookings.subscribe((bookings: Booking[]) => {
      this.bookings = bookings.slice();
      console.log(bookings);
    });
  }

  public ngOnDestroy(): void {
    this._unsubscribeSubscriptions();
  }

  public onClickDelete(bookingId: string, item: IonItemSliding) {
    item.close();
    this._bookingsService.deleteBookingById(bookingId);
    console.log(bookingId);
  }

  private _unsubscribeSubscriptions() {
    this._bookingsSubscription?.unsubscribe();
  }
}
