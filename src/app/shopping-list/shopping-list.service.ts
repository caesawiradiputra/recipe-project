import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class shoppingListService {
  // ingredientAdded = new EventEmitter<Ingredient>();

  startEditing = new Subject<number>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  private blnExist: boolean;

  getIngredient() {
    return this.ingredients;
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    this.blnExist = false;
    for (let oldIngredient of this.ingredients) {
      if (oldIngredient.name === newIngredient.name) {
        oldIngredient.amount = oldIngredient.amount * 1 + newIngredient.amount * 1;
        this.blnExist = true;
        break;
      }
    }
    console.log("blnExists = " + this.blnExist);
    if (!this.blnExist) {
      this.ingredients.push(newIngredient);
    }
    // console.log("addIngredient len = " + this.ingredients.length);
  }

  editIngredient(editedIngredient: Ingredient, index: number) {
    this.ingredients[index].name = editedIngredient.name;
    this.ingredients[index].amount = editedIngredient.amount;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  addIngredients(newIngredients: Ingredient[]) {
    // console.log("addIngredients works");
    for (let newIngredient of newIngredients) {
      // console.log("add " + newIngredient.name);
      this.addIngredient(newIngredient);
    }
  }
}
