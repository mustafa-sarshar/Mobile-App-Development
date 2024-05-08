import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BookingsPageRoutingModule } from "./bookings-routing.module";

import { BookingsPage } from "./bookings.page";
import { AddBookingModule } from "./components/add-booking/add-booking.module";
import { BookingsService } from "./bookings.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BookingsPageRoutingModule, AddBookingModule],
  declarations: [BookingsPage],
  providers: [BookingsService],
})
export class BookingsPageModule {}
