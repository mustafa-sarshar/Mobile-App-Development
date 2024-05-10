import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OffersPage } from "./offers.page";

const routes: Routes = [
  {
    path: "",
    component: OffersPage,
  },
  {
    path: "add",
    loadChildren: () =>
      import("./views/add-offer/add-offer.module").then((m) => m.AddOfferPageModule),
  },
  {
    path: "edit/:placeId",
    loadChildren: () =>
      import("./views/edit-offer/edit-offer.module").then((m) => m.EditOfferPageModule),
  },
  {
    path: ":offerId",
    loadChildren: () =>
      import("./views/offer-detail/offer-detail.module").then((m) => m.OfferDetailPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
