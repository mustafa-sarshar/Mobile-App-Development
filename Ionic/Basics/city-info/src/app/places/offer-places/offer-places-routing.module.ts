import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OfferPlacesPage } from "./offer-places.page";

const routes: Routes = [
  {
    path: "",
    component: OfferPlacesPage,
  },
  {
    path: "add-new-offer",
    loadChildren: () =>
      import("./add-new-offer/add-new-offer.module").then(
        (m) => m.AddNewOfferPageModule,
      ),
  },
  {
    path: "edit-new-offer",
    loadChildren: () =>
      import("./edit-new-offer/edit-new-offer.module").then(
        (m) => m.EditNewOfferPageModule,
      ),
  },
  {
    path: "offer-bookings",
    loadChildren: () =>
      import("./offer-bookings/offer-bookings.module").then(
        (m) => m.OfferBookingsPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferPlacesPageRoutingModule {}
