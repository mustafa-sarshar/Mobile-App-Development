import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { RecipeItemComponent } from "./recipe-item.component";

@NgModule({
  declarations: [RecipeItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [RecipeItemComponent],
})
export class RecipeItemModule {}
