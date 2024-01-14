import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { RecipesPageRoutingModule } from "./recipes-routing.module";
import { RecipesPage } from "./recipes.page";
import { RecipesService } from "./recipes.service";
import { RecipeItemModule } from "./recipe-item/recipe-item.module";

@NgModule({
  declarations: [RecipesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    RecipeItemModule,
  ],
  providers: [RecipesService],
})
export class RecipesPageModule {}
