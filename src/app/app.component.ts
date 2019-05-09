import {Component, NgModule} from '@angular/core';
import { HeaderComponent } from "./header.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import {RecipeService} from "./recipies/recipe.service";
import {RouterModule} from "@angular/router";
import {AppRouterModule} from "./app.router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [RecipeService]
})

@NgModule({
  declarations : [HeaderComponent],
  imports :[
    AppRouterModule
  ]
})
export class AppComponent {

}
