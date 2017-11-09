import { Component, OnInit, Output } from '@angular/core'; // EventEmitter
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  recipes: Recipe[] = [];

  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg'),
  //   new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8tdsd7nkUOji1QsAgGw3DPmtAlBWn9V9VmEaLm0OMqNzZu7Yjg')
  // ];

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  //   // console.log('onRecipeSelected');
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route}); 
  }

}
