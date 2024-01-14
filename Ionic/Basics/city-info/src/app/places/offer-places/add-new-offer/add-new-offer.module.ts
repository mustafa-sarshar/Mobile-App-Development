import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddNewOfferPageRoutingModule } from "./add-new-offer-routing.module";

import { AddNewOfferPage } from "./add-new-offer.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewOfferPageRoutingModule,
  ],
  declarations: [AddNewOfferPage],
})
export class AddNewOfferPageModule {}
