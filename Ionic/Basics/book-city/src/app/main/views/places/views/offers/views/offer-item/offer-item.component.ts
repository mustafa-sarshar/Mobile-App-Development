import { Component, Input, OnInit } from "@angular/core";

import { Offer } from "../../definitions/offer.model";

@Component({
  selector: "my-offer-item",
  templateUrl: "./offer-item.component.html",
  styleUrls: ["./offer-item.component.scss"],
})
export class OfferItemComponent implements OnInit {
  @Input({ required: true }) offerData?: Offer;

  constructor() {}

  public ngOnInit() {}
}
