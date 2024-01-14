import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddNewOfferPage } from "./add-new-offer.page";

const routes: Routes = [
  {
    path: "",
    component: AddNewOfferPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewOfferPageRoutingModule {}
