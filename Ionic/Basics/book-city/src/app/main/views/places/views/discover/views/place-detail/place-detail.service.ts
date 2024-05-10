import { Injectable } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";

import { AddBookingComponent } from "../../../../../bookings/views/add-booking/add-booking.component";
import { Place } from "../../../../definitions/place.model";

@Injectable()
export class PlaceDetailService {
  constructor(
    private readonly _modalController: ModalController,
    private readonly _actionSheetController: ActionSheetController,
  ) {}

  public handleBooking(place: Place) {
    this._actionSheetController
      .create({
        header: "Choose an action",
        buttons: [
          {
            text: "Select date",
            handler: () => {
              this._openBookingOptions("SELECT_DATE", place);
            },
          },
          {
            text: "Random date",
            handler: () => {
              this._openBookingOptions("RANDOM_DATE", place);
            },
          },
          { text: "Cancel", role: "cancel" },
        ],
      })
      .then((itemEl: HTMLIonActionSheetElement) => {
        itemEl.present();
      });
  }

  private _openBookingOptions(mode: "SELECT_DATE" | "RANDOM_DATE", place: Place) {
    console.log(mode);

    this._modalController
      .create({
        component: AddBookingComponent,
        componentProps: { placeData: place },
        id: "addBooking",
      })
      .then((modalEl: HTMLIonModalElement) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((result: any) => {
        if (result) {
          if (result.role) {
            if (result.role === "confirm") {
              console.log(result);
            }
          }
        }
      });
  }
}
