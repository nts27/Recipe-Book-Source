import { Component,NgModule } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {Recipe} from "./recipe";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AppRouterModule} from "../app.router";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html'
})

@NgModule({
  declarations : [RecipeListComponent],
  imports:[
    AppRouterModule
  ]
})

export class RecipiesComponent {

}
