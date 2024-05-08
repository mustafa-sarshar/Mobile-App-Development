import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RecipesService {
  public recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([
    {
      _id: "000-0001",
      title: "Schnitzel",
      imageUrl:
        "https://media.istockphoto.com/id/603258520/photo/schnitzel-and-fried-potatoes.jpg?s=612x612&w=0&k=20&c=RXAndwtpKN2XUvV_TCkCQCfdlQ6sjJXTOiNpq7Kphs0=",
      ingredients: ["French Fries", "Pork Meat", "Salad"],
    },
    {
      _id: "000-0002",
      title: "Spaghetti",
      imageUrl:
        "https://media.istockphoto.com/id/1144823591/fr/photo/spaghetti-dans-un-plat-sur-un-fond-blanc.jpg?s=612x612&w=0&k=20&c=qFzd8iE185mpsX7hWqYaieOWlzJVCkzFdYsxmwUT3-Q=",
      ingredients: ["Spaghetti", "Meat", "Tomatoes"],
    },
  ]);

  constructor() {}

  public getRecipes() {
    return this.recipes.getValue().slice();
  }

  public getRecipeById(recipeId: string) {
    const recipes = this.getRecipes();
    const recipeFound = recipes.find((recipe: Recipe) => {
      return recipe._id === recipeId;
    });

    if (!recipeFound) {
      return null;
    }

    return {
      ...recipeFound,
    };
  }

  public deleteRecipeById(recipeId: string) {
    const recipes = this.getRecipes();
    const recipesUpdate = recipes.filter(
      (recipe: Recipe) => recipe._id !== recipeId,
    );
    this.recipes.next([...recipesUpdate]);
  }
}
