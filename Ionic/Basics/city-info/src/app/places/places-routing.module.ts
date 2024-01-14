import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlacesPage } from "./places.page";

const routes: Routes = [
  {
    path: "",
    component: PlacesPage,
  },
  {
    path: "discover-places",
    loadChildren: () =>
      import("./discover-places/discover-places.module").then(
        (m) => m.DiscoverPlacesPageModule,
      ),
  },
  {
    path: "offer-places",
    loadChildren: () =>
      import("./offer-places/offer-places.module").then(
        (m) => m.OfferPlacesPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
