import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OffersPageRoutingModule } from "./offers-routing.module";

import { OffersPage } from "./offers.page";
import { OffersService } from "./offers.service";
import { OfferItemModule } from "./views/offer-item/offer-item.module";

@NgModule({
  declarations: [OffersPage],
  imports: [CommonModule, FormsModule, IonicModule, OffersPageRoutingModule, OfferItemModule],
  providers: [OffersService],
})
export class OffersPageModule {}
