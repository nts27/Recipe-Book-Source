import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../user-service.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy{

  selectedRecipe: Recipe;
  private recipeIndex : number = 1;
  private subscription : Subscription;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }



  constructor(private shoppingListService : ShoppingListService,
              private router : Router,
              private route : ActivatedRoute,
              private recipeService : RecipeService,
              private userService: UserService){}

  onShoppingListAdd(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isAdmin(){
    return this.userService.isAdmin();
  }
}
