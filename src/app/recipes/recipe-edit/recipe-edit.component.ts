import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  recipeName: string;
  recipeDesc: string;
  recipeImagePath: string;
  ingredientName: string;
  ingredientAmount: number;

  recipe: Recipe;

  ingredients: Ingredient[];
  ingredient: Ingredient;
  indexRecipe: number;
  indexIngredient: number;

  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.indexRecipe = +params['id'];
        this.editMode = params['id'] != null;
        console.log("indexRecipe = " + this.indexRecipe);
      }
      );
    this.initForm();
  }

  private initForm() {
    let recipeName = 'default';
    let recipeDesc = 'default';
    let recipeImagePath = 'default';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.indexRecipe);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImagePath = recipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName),
      'recipeDesc': new FormControl(recipeDesc),
      'recipeImagePath': new FormControl(recipeImagePath)
    });
  }

  onEditRecipes() {
    console.log("onEditRecipes works");
    if (this.editMode) {
      this.ingredient.name = this.ingredientName;
      this.ingredient.amount = this.ingredientAmount;
      this.recipeService.editRecipeIngredient(this.indexRecipe, this.indexIngredient, this.ingredient);
    } else {

    }
  }

  getRecipe(idRecipe: number) {
    this.recipe = this.recipeService.getRecipe(this.indexRecipe);
    this.recipeName = this.recipe.name;
    this.recipeDesc = this.recipe.description;
    this.recipeImagePath = this.recipe.imagePath;
    this.ingredients = this.recipe.ingredients;
  }

  getRecipeIngredient(idIngredient: number) {
    // this.ingredient = this.recipeService.getRecipeIngredient(idRecipe, idIngredient);
    this.ingredient = this.ingredients[idIngredient];
    this.ingredientName = this.ingredient.name;
    this.ingredientAmount = this.ingredient.amount;
    // this.nameInputRef.nativeElement.value = this.ingredient.name;
    // this.amountInputRef.nativeElement.value = this.ingredient.amount;
  }

}
