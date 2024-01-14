import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EditNewOfferPageRoutingModule } from "./edit-new-offer-routing.module";

import { EditNewOfferPage } from "./edit-new-offer.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNewOfferPageRoutingModule,
  ],
  declarations: [EditNewOfferPage],
})
export class EditNewOfferPageModule {}
