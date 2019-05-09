import {RouterModule, Routes} from "@angular/router";
import {RecipiesComponent} from "./recipies/recipies.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {RecipeEditComponent} from "./recipies/recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipies/recipe-start.component";
import {RecipeDetailComponent} from "./recipies/recipe-detail/recipe-detail.component";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";

const APP_ROUTER_PROVIDER: Routes = [
    { path: '', redirectTo:'/recipes', pathMatch:'full'},
    { path: 'recipes', component: RecipiesComponent, children: [
      { path: '', component : RecipeStartComponent},
      { path: 'new', component : RecipeEditComponent},
      { path: ':id', component : RecipeDetailComponent},
      { path: ':id/edit', component : RecipeEditComponent},
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'addUser', component: UserComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTER_PROVIDER)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {}
