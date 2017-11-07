import { Injectable, EventEmitter, } from '@angular/core';
import { Recipe, User } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class UserWithGetProperty {
  constructor(private username: string, private password: string){}

}

@Injectable()
export class RecipeService {

  debug = false;

  recipeSelected = new EventEmitter<Recipe>();
  startEditing = new Subject<Recipe>();

  constructor(private shoppingListService: shoppingListService,
        private httpClient: HttpClient,
        private http: Http) { }

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
  
  resultHttpClient;

  private user: User[];

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

  getUserWithGetProperty() 
  {
    this.httpClient.get("http://localhost:8080/api/user/")
      .map(rawMessages => {
        if (this.debug){
          console.log('getUserWithGetProperty | map 1');
          console.log(rawMessages['content']);
        }
        return rawMessages['content'];
      })
      .map(this.mapToUser)
      .do(data => {
        if (this.debug){
          console.log('getUserWithGetProperty | do');
          console.log(data);
        }
        this.user = data;
        return data;
      })
      .subscribe(); 
      
    return this.user;
  }
  
  private mapToUser(rawMessages): Array<User> {
    return rawMessages.map(it => new User(it));
  }
  
  private extractData(res: Response) {
    const body = res.json();
    if (body){
      return body.data || body;
    } else {
      return {}
    }
  }

}
