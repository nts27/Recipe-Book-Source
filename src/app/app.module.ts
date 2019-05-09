import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { UserDropdownDirective } from './user-dropdown.directive';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRouterModule } from "./app.router";
import { RecipeStartComponent } from './recipies/recipe-start.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import {FormsModule, NG_VALIDATORS, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LoginComponent } from './login/login.component';
import {UserService} from "./user-service.service";
import { UserComponent } from './user/user.component';
import { AuthenticateDirective } from './authenticate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    UserDropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LoginComponent,
    UserComponent,
    AuthenticateDirective
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
