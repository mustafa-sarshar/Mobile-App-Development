export class Booking {
  constructor(
    public _id: string,
    public title: string,
    public placeId: string,
    public userId: string,
    public nGuests: number,
  ) {}
}
