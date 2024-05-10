import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddOfferPageRoutingModule } from "./add-offer-routing.module";

import { AddOfferPage } from "./add-offer.page";
import { AddOfferService } from "./add-offer.service";
import { PlacesService } from "../../../../places.service";

@NgModule({
  declarations: [AddOfferPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, AddOfferPageRoutingModule],
  providers: [AddOfferService, PlacesService],
})
export class AddOfferPageModule {}
