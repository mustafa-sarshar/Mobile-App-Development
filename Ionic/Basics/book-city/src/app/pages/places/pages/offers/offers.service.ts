import { Injectable } from "@angular/core";

import { Place } from "../../definitions/place.model";

@Injectable()
export class OffersService {
  private _offers: Place[] = [
    new Place(
      "0001",
      "Manhattan Mansion",
      "In the heart of New York City",
      "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
      149.99,
    ),
    new Place(
      "0002",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
      189.99,
    ),
    new Place(
      "0003",
      "The Foggy Palace",
      "Not your average city trip.",
      "https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg",
      99.99,
    ),
  ];

  constructor() {}

  public ngOnInit(): void {}

  get offers() {
    return this._offers.slice();
  }

  public getOfferById(placeId: string) {
    if (this._offers && this._offers.length > 0) {
      return this._offers.find((place: Place) => place._id === placeId);
    }

    return null;
  }
}
