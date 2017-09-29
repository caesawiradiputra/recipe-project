import { Component, OnInit, Input, Output } from '@angular/core'; // EventEmitter
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
  }

  // @Output() recipeSelected = new EventEmitter<void>();

  // onSelected() {
  //   // console.log('onSelected|name = ' + this.recipe.name);
  //   // this.recipeSelected.emit();

  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
