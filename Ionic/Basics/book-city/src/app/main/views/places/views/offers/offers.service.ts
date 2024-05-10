import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Place } from "../../definitions/place.model";
import { Offer } from "./definitions/offer.model";
import { UtilityService } from "../../../../../shared/services/utility/utility.service";

@Injectable()
export class OffersService {
  public offers: BehaviorSubject<Offer[]> = new BehaviorSubject<Offer[]>([
    new Offer(
      this._utilityService.getRandomId(8, "MIXED"),
      new Place(
        "place-0001",
        "Manhattan Mansion",
        "In the heart of New York City",
        "https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=",
        149.99,
      ),
      new Date(Date.now()),
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
    ),
    new Offer(
      this._utilityService.getRandomId(8, "MIXED"),
      new Place(
        "place-0002",
        "L'Amour Toujours",
        "A romantic place in Paris!",
        "https://vmn-missethoreca.imgix.net/uploads/2024/02/lt-130124-int-laagres-31.jpg?auto=compress%2Cformat&q=50",
        189.99,
      ),
      new Date(Date.now()),
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    ),
    new Offer(
      this._utilityService.getRandomId(8, "MIXED"),
      new Place(
        "place-0003",
        "The Foggy Palace",
        "Not your average city trip.",
        "https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg",
        99.99,
      ),
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 20),
    ),
  ]);

  constructor(private readonly _utilityService: UtilityService) {}

  public ngOnInit(): void {}

  public getOffers() {
    return this.offers.getValue().slice();
  }

  public setOffers(offers: Offer[]) {
    this.offers.next(offers);
  }

  public getOfferById(offerId: string) {
    const offers = this.getOffers();

    if (offers && offers.length > 0) {
      return offers.find((offer: Offer) => offer._id === offerId);
    }

    return null;
  }

  public addOffer(offer: Offer) {
    const offers = this.getOffers();

    if (offers) {
      offers.push(offer);
      this.setOffers(offers);
    }
  }
}
