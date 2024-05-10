import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { OfferItemComponent } from "./offer-item.component";
import { OfferItemService } from "./offer-item.service";

@NgModule({
  declarations: [OfferItemComponent],
  imports: [CommonModule, IonicModule],
  providers: [OfferItemService],
  exports: [OfferItemComponent],
})
export class OfferItemModule {}
