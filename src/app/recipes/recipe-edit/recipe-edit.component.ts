import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  indexRecipe: number;

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
    // console.log(this.recipeForm);
  }

  private initForm() {
    let recipeName = 'default';
    let recipeDesc = 'default';
    let recipeImagePath = 'default';

    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.indexRecipe);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImagePath = recipe.imagePath;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name, Validators.required),
              'ingredientAmount': new FormControl(ingredient.amount, Validators.required)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'recipeDesc': new FormControl(recipeDesc, Validators.required),
      'recipeImagePath': new FormControl(recipeImagePath, Validators.required),
      'recipeIngredients': recipeIngredients
    });
    // console.log(recipeIngredients);

  }

  onDeleteRecipeIngredient(idIngredient: number) {
    // this.recipeService.deleteRecipeIngredient(this.indexRecipe, idIngredient);
    // this.initForm();
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(idIngredient);
  }

  onAddRecipeIngredient() {
    // this.recipeService.addEmptyRecipeIngredient(this.indexRecipe);
    // console.log(this.recipeService.getRecipe(this.indexRecipe));

    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'ingredientName': new FormControl('', Validators.required),
        'ingredientAmount': new FormControl('', Validators.required)
      })
    );
  }

  onSubmit() {
    console.log('onSubmit works');
    let ingredientArray = [];
    let editIngredient: Ingredient;

    for (let ingredient of (<FormArray>this.recipeForm.get('recipeIngredients')).controls) {
      editIngredient = new Ingredient(ingredient.value.ingredientName, ingredient.value.ingredientAmount);
      ingredientArray.push(editIngredient);
      console.log(editIngredient);
    }

    let editedRecipe: Recipe;
    editedRecipe = new Recipe(this.recipeForm.get('recipeName').value,
      this.recipeForm.get('recipeDesc').value,
      this.recipeForm.get('recipeImagePath').value,
    ingredientArray);

    if (this.editMode) {
      this.recipeService.editRecipeItem(this.indexRecipe, editedRecipe);
    } else {
      this.recipeService.addRecipeItem(editedRecipe);
    }
  }

}
