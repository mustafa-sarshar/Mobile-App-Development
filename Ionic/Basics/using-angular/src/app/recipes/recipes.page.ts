import { Component, OnDestroy, OnInit } from "@angular/core";

import { RecipesService } from "./recipes.service";
import { Recipe } from "./recipe.model";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from "@ionic/angular";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  public recipes: Recipe[] = [];
  private recipesSubscription?: Subscription;

  constructor(
    private readonly _recipesService: RecipesService,
    private readonly _router: Router,
  ) {}

  public ngOnInit() {
    this.recipesSubscription = this._recipesService.recipes.subscribe(
      (recipes: Recipe[]) => {
        if (recipes) {
          this.recipes = recipes;
        }
      },
    );
  }

  public ionViewWillEnter(): void {
    console.log("ionViewWillEnter");
  }

  public ionViewDidEnter(): void {
    console.log("ionViewDidEnter");
  }

  public ionViewWillLeave(): void {
    console.log("ionViewWillLeave");
  }

  public ionViewDidLeave(): void {
    console.log("ionViewDidLeave");
  }

  public ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
  }
}
