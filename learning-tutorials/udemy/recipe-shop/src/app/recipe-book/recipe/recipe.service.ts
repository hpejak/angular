import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'A simple Burger',
      'https://yt3.ggpht.com/ytc/AKedOLSQYSjN--Nhic1c9BD1elMd0EUdUGeWkn4FfbfkOQ=s900-c-k-c0x00ffffff-no-rj',
      [new Ingredient('Meat', 1),
        new Ingredient('Salad',1),
        new Ingredient('Buns',1)]
    ),
    new Recipe(
      'Double Burger',
      'It\'s for double with double the meat',
      'https://yt3.ggpht.com/ytc/AKedOLSQYSjN--Nhic1c9BD1elMd0EUdUGeWkn4FfbfkOQ=s900-c-k-c0x00ffffff-no-rj',
      [new Ingredient('Meat', 2),
        new Ingredient('Salad',2),
        new Ingredient('Buns',1)]
    )];

  getRecipes(){
    return this.recipes.slice();
  }


}
