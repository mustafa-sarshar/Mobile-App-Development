import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OfferDetailPageRoutingModule } from "./offer-detail-routing.module";

import { OfferDetailPage } from "./offer-detail.page";
import { OfferDetailService } from "./offer-detail.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OfferDetailPageRoutingModule],
  declarations: [OfferDetailPage],
  providers: [OfferDetailService],
})
export class OfferDetailPageModule {}
