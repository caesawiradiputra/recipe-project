import { Component, OnInit, Output } from '@angular/core'; // EventEmitter
import { Recipe, User } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
            private router: Router,
            private route: ActivatedRoute,
            private httpClient: HttpClient,
            private http: Http) { }

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

  data: string[];
  dataJson: User[];
  dataString: string;

  onTestJson() {

    // this.httpClient.get("http://localhost:8080/api/user/")
    //   .subscribe(
    //     (response: Response) => {
    //       console.log('start http get');
    //       this.dataString = "testJson";
    //       this.dataJson = response['content'];
    //       console.log(this.dataJson[0].parse);
          
    //     }
    //   );

    this.dataJson = this.recipeService.getUserWithGetProperty();

    console.log('onTestJson');
    console.log(this.dataJson);
  }

}
