import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { authGuard } from "./main/views/auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./main/views/auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "places",
    loadChildren: () => import("./main/views/places/places.module").then((m) => m.PlacesPageModule),
    canActivate: [authGuard],
  },
  {
    path: "bookings",
    loadChildren: () =>
      import("./main/views/bookings/bookings.module").then((m) => m.BookingsPageModule),
    canActivate: [authGuard],
  },
  {
    path: "**",
    redirectTo: "/places",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
