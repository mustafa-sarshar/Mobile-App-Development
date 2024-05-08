import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";

import { PlacesService } from "../../../places.service";
import { Place } from "../../../definitions/place.model";
import { AddBookingComponent } from "../../../../bookings/components/add-booking/add-booking.component";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  public place?: Place | null;

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _navController: NavController,
    private readonly _route: ActivatedRoute,
    private readonly _modalController: ModalController,
  ) {}

  public ngOnInit() {
    const placeId = this._route.snapshot.paramMap.get("placeId");

    if (placeId) {
      this.place = this._placesService.getPlaceById(placeId);
    } else {
      this._navController.navigateBack(["/", "places", "discover"]);
    }
  }

  public onClickBook() {
    this._modalController
      .create({
        component: AddBookingComponent,
        componentProps: { placeData: this.place },
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
