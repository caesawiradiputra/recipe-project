import { RecipeService } from './recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe (
        (recipe: Recipe) => {
          // console.log('subscribe');
          this.selectedRecipe = recipe;
        }
      );
  }

}
