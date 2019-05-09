import {Component, Input, NgModule, OnInit} from '@angular/core';
import { Recipe } from '../recipe'
import {AppRouterModule} from "../../app.router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})


@NgModule({
  imports: [
    AppRouterModule
  ]
})

export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
