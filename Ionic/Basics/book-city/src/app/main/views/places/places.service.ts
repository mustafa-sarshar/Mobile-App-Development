import { Injectable, OnInit } from "@angular/core";

import { Place } from "./definitions/place.model";
import { UtilityService } from "../../../shared/services/utility/utility.service";

@Injectable()
export class PlacesService implements OnInit {
  private _places: Place[] = [
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
      149.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
      189.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "The Foggy Palace",
      "Not your average city trip.",
      "https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg",
      99.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
      149.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
      189.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "The Foggy Palace",
      "Not your average city trip.",
      "https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg",
      99.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
      149.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
      189.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "The Foggy Palace",
      "Not your average city trip.",
      "https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg",
      99.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
      149.99,
    ),
    new Place(
      this._utilityService.getRandomId(8, "MIXED"),
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
      189.99,
    ),
  ];

  constructor(private readonly _utilityService: UtilityService) {}

  public ngOnInit(): void {}

  get places() {
    return this._places.slice();
  }

  public getPlaceById(placeId: string) {
    if (this._places && this._places.length > 0) {
      return this._places.find((place: Place) => place._id === placeId);
    }

    return null;
  }
}
