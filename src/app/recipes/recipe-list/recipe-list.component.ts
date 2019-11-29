import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Sunday Roast', 'Delicious Traditional Sunday Dinner', 'https://thumbs.dreamstime.com/z/sunday-roast-beef-dinner-3117638.jpg'),
    new Recipe('Another Sunday Roast', 'Delicious Traditional Sunday Dinner', 'https://thumbs.dreamstime.com/z/sunday-roast-beef-dinner-3117638.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
