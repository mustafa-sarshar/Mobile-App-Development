import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"],
})
export class RecipeItemComponent implements OnInit {
  @Input({ required: true }) public recipeData?: Recipe;

  constructor(private readonly _router: Router) {}

  public ngOnInit() {}

  public onClickItem(itemId: string) {
    this._router.navigate(["/", "recipes", itemId]);
  }
}
