import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
;
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Sunday Roast', 'Delicious Traditional Sunday Dinner', 'https://thumbs.dreamstime.com/z/sunday-roast-beef-dinner-3117638.jpg'),
    new Recipe('Another Sunday Roast', 'Delicious Traditional Sunday Dinner', 'https://thumbs.dreamstime.com/z/sunday-roast-beef-dinner-3117638.jpg')
  ];

  getRecipes() {
    // Use slice to get copy of array, not real array
    return this.recipes.slice();
  }
}