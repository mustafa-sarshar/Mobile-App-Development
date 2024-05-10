import { Component, Input, OnInit } from "@angular/core";
import { ModalController, ModalOptions } from "@ionic/angular";

import { Place } from "../../../places/definitions/place.model";

@Component({
  selector: "app-add-booking",
  templateUrl: "./add-booking.component.html",
  styleUrls: ["./add-booking.component.scss"],
})
export class AddBookingComponent implements OnInit {
  @Input() public placeData?: Place;

  constructor(private readonly _modalController: ModalController) {}

  public ngOnInit() {}

  public onClickClose() {
    this._closeModal(null, "cancel");
  }

  public onClickBook() {
    this._closeModal({ message: "You booked this place successfully!" }, "confirm");
  }

  private _closeModal(data: any, role: string) {
    this._modalController.dismiss(data, role, "addBooking");
  }
}
