import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('recipe-detail works');
    this.route.params
      .subscribe (
        (params: Params) => {
          this.id = +params['id'];  // casting dari String ke Number
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(newIngredients: Ingredient[]) {
    // console.log("onAddToShoppingList works");
    this.recipeService.addIngredientsToShoppingList(newIngredients);
    alert("Ingredient Added to Shopping List");
  }
}
