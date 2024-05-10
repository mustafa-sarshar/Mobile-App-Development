import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DiscoverPageRoutingModule } from "./discover-routing.module";

import { DiscoverPage } from "./discover.page";
import { PlacesService } from "../../places.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DiscoverPageRoutingModule],
  declarations: [DiscoverPage],
  providers: [PlacesService],
})
export class DiscoverPageModule {}
