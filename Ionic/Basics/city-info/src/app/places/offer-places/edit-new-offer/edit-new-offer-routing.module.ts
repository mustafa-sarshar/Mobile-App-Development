import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EditNewOfferPage } from "./edit-new-offer.page";

const routes: Routes = [
  {
    path: "",
    component: EditNewOfferPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditNewOfferPageRoutingModule {}
