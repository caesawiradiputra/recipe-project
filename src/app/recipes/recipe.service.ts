import { Injectable, EventEmitter, } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

export class UserWithGetProperty {
  constructor(private username: string, private password: string){}

}

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  startEditing = new Subject<Recipe>();

  constructor(private shoppingListService: shoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // console.log("addIngredientsToShoppingList works")
    this.shoppingListService.addIngredients(ingredients);
  }

  editRecipeItem(idRecipe: number, recipe: Recipe) {
    this.recipes[idRecipe] = recipe;
  }

  addRecipeItem(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipeItem(id: number) {
    // console.log("deleteRecipeItem works | id = " + id);
    this.recipes.splice(id, 1);
    // console.log(this.recipes.length);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipeIngredient(idRecipe: number, idIngredient: number) {
    return this.recipes[idRecipe].ingredients[idIngredient];
  }

  addEmptyRecipeIngredient(idRecipe: number) {
    this.recipes[idRecipe].ingredients.push(new Ingredient('new', 0));
  }

  deleteRecipeIngredient(idRecipe: number, idIngredient: number) {
    this.recipes[idRecipe].ingredients.splice(idIngredient, 1);
  }

}
