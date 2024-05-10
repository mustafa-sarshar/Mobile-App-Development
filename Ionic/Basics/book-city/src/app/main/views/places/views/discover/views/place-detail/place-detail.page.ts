import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

import { PlacesService } from "../../../../places.service";
import { Place } from "../../../../definitions/place.model";

import { PlaceDetailService } from "./place-detail.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  public place?: Place | null;

  constructor(
    private readonly _placeDetailService: PlaceDetailService,
    private readonly _placesService: PlacesService,
    private readonly _navController: NavController,
    private readonly _route: ActivatedRoute,
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
    if (this.place) {
      this._placeDetailService.handleBooking(this.place);
    }
  }
}
