import { Component, OnInit } from "@angular/core";
import { IonItemSliding, NavController } from "@ionic/angular";
import { Subscription } from "rxjs";

import { OffersService } from "./offers.service";
import { Offer } from "./definitions/offer.model";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  public offers?: Offer[];
  private _offersSubscription?: Subscription;

  constructor(
    private readonly _offersService: OffersService,
    private readonly _navController: NavController,
  ) {}

  public ngOnInit() {
    this._offersSubscription = this._offersService.offers.subscribe((offers: Offer[]) => {
      this.offers = offers.slice();
    });
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
