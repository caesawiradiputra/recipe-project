import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class shoppingListComponent implements OnInit {

  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    // console.log("len = " + this.ingredients.length);
  }

  ingredients: Ingredient[] = [];

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }
}
