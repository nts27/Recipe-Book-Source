import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";
import {Recipe} from "../recipe";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// import {REACTIVE_DRIVEN_DIRECTIVES} from "@angular/forms/src/directives";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})

// @NgModule({
//   declarations: [REACTIVE_DRIVEN_DIRECTIVES]
// })
export class RecipeEditComponent implements OnInit, OnDestroy{

  private recipeIndexNumber: number;
  private subscription: Subscription;
  private isNew = true;
  private recipe: Recipe;
  recipeForm : FormGroup;

  constructor(private router: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private route: Router) {}


  ngOnInit(): void {
    this.subscription = this.router.params.subscribe(
      (params:any) =>{
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.recipeIndexNumber = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndexNumber);
        }else{
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    )
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent= '';
    let recipeIngredient: FormArray= new FormArray([]);

    if(!this.isNew){
      for(let i=0; i < this.recipe.ingredients.length; i++){
        recipeIngredient.push(
          new FormGroup({
            name : new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount : new FormControl(this.recipe.ingredients[i].amount,
              [Validators.required, Validators.pattern("\\d+")])
          })
        )
      }
      recipeName = this.recipe.name;
      recipeContent = this.recipe.description;
      recipeImageUrl = this.recipe.imagePath;
    }

    this.recipeForm = this.formBuilder.group({
      name : [recipeName,Validators.required],
      imagePath: [recipeImageUrl,Validators.required],
      description: [recipeContent,Validators.required],
      ingredients: recipeIngredient
    });

  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    }else{
      this.recipeService.editRecipe(this.recipe,newRecipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name : new FormControl(name, Validators.required),
        amount : new FormControl(amount,
          [Validators.required, Validators.pattern("\\d+")])
      })
    );
  }

  onDeleteItem(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private navigateBack(){
    this.route.navigate(['../']);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
