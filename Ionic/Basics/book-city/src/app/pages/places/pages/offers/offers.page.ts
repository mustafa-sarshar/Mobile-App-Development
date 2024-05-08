import { Component, OnInit } from "@angular/core";
import { IonItemSliding, NavController } from "@ionic/angular";
import { Subscription } from "rxjs";

import { Place } from "../../definitions/place.model";
import { OffersService } from "./offers.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  public offers?: Place[];
  private _offersSubscription?: Subscription;

  constructor(
    private readonly _offersService: OffersService,
    private readonly _navController: NavController,
  ) {}

  public ngOnInit() {
    this.offers = this._offersService.offers;
  }

  public ngOnDestroy(): void {
    this._unsubscribeSubscriptions();
  }

  public onClickEdit(offerId: string, item: IonItemSliding) {
    item.close();
    this._navController.navigateForward(["/", "places", "offers", "edit", offerId]);
  }

  private _unsubscribeSubscriptions() {
    this._offersSubscription?.unsubscribe();
  }
}
