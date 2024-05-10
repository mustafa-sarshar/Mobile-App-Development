import { Place } from "../../../definitions/place.model";

export class Offer {
  constructor(
    public _id: string,
    public place: Place,
    public dateFrom: Date,
    public dateTo: Date,
  ) {}
}
