import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { AddBookingComponent } from "./add-booking.component";
import { AddBookingService } from "./add-booking.service";

@NgModule({
  declarations: [AddBookingComponent],
  imports: [CommonModule, IonicModule],
  providers: [AddBookingService],
})
export class AddBookingModule {}
