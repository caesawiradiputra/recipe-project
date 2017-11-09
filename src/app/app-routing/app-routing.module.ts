import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';
import { shoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { SqlserverComponent } from '../sqlserver/sqlserver.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ":id", component: RecipeDetailComponent},
    {path: ":id/edit", component: RecipeEditComponent}
    // {path: ":id/:idIngredient", component: RecipeEditComponent}
  ]},
  { path: 'shopping-list', component: shoppingListComponent},
  { path: 'sql-server', component: SqlserverComponent},
  { path: '**', component: RecipesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
