import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OffersPageRoutingModule } from "./offers-routing.module";

import { OffersPage } from "./offers.page";
import { OffersService } from "./offers.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OffersPageRoutingModule],
  declarations: [OffersPage],
  providers: [OffersService],
})
export class OffersPageModule {}
