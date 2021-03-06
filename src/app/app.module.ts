
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { shoppingListComponent } from './shopping-list/shopping-list.component';
import { shoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { shoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';
import { SqlserverListComponent } from './sqlserver/sqlserver-list/sqlserver-list.component';
import { SqlserverService } from './sqlserver/sqlserver.service';
import { SqlserverItemComponent } from './sqlserver/sqlserver-list/sqlserver-item/sqlserver-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    shoppingListComponent,
    shoppingEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SqlserverComponent,
    SqlserverListComponent,
    SqlserverItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [RecipeService, shoppingListService, SqlserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
