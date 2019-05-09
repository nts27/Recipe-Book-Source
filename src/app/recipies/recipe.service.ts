import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredients} from "../ingredients";
import {Http} from "@angular/http";


@Injectable()
export class RecipeService {

  private recipes: Recipe[]=[
    new Recipe("Chicken Fries", "Non Veg", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg",[
      new Ingredients('French Fries',1),
      new Ingredients('Chicken',2)
    ]),
    new Recipe("Veg Salad", "Veg", "http://i.ndtvimg.com/i/2015-09/salad-625_625x350_81441360886.jpg",[
      new Ingredients('Lettuce',10),
      new Ingredients('Brocolli',100)
    ])
  ];

  constructor(private http: Http) { }

    getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }


  storeData(){
      const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put("https://recipe-book-1faf0.firebaseio.com/recipes.json", body);
  }

  fetchData(){
    return this.http.get("https://recipe-book-1faf0.firebaseio.com/recipes.json");
  }
}
