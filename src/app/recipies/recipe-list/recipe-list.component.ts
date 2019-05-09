import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";
import {RecipeService} from "../recipe.service";
import {AppRouterModule} from "../../app.router";
import {UserService} from "../../user-service.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

@NgModule({
  declarations : [RecipeItemComponent],
  imports:[
    AppRouterModule
  ]
})

export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private userService: UserService){}

  ngOnInit() {
   this.recipes = this.recipeService.getRecipes();
  }

  isAdmin(){
    return this.userService.isAdmin();
  }
}
