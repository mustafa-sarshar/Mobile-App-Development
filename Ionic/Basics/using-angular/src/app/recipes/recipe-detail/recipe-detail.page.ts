import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  public recipeData?: Recipe | null;

  constructor(
    private readonly _recipesService: RecipesService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _alertController: AlertController,
  ) {}

  public ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      if (!paramMap) {
        this._gotBack();
      }

      const recipeId = paramMap.get("recipeId");

      if (!recipeId) {
        this._gotBack();
      } else {
        this.recipeData = this._recipesService.getRecipeById(recipeId);
      }
    });
  }

  public onClickDelete(): void {
    if (this.recipeData) {
      this._alertController
        .create({
          header: "Are you sure?",
          message: "Do you really want to delete the recipe?",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
            },
            {
              text: "Delete",
              handler: () => {
                if (this.recipeData) {
                  this._recipesService.deleteRecipeById(this.recipeData._id);
                  this._gotBack();
                }
              },
            },
          ],
        })
        .then((alertEl: HTMLIonAlertElement) => {
          alertEl.present();
        });
    }
  }

  private _gotBack(): void {
    this._router.navigate(["/", "recipes"]);
  }
}
