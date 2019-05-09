import {Component, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {UserDropdownDirective} from "./user-dropdown.directive";
import {Router, RouterModule} from "@angular/router";
import {AppRouterModule} from "./app.router";
import {RecipeService} from "./recipies/recipe.service";
import {passBoolean} from "protractor/built/util";
import {UserService} from "./user-service.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

@NgModule({
  declarations : [UserDropdownDirective],
  imports :[
    AppRouterModule
  ]
})
export class HeaderComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;

  ngOnInit(): void {
    this.username = "User";
  }

  setUserName(name){
    this.username = name;
  }

  @Input() username: string = "";

  constructor(private recipeService: RecipeService, private userService: UserService, private router: Router){
    this.userService.nameEmit.subscribe(name => this.username = name);
  }

  onStore(){
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    )
  }

  onFetch(){
    // this.recipeService.fetchData().subscribe(
    //   data => console.log(data),
    //   error => console.error(error)
    // )
    console.log("ModalClicked");
    this.router.navigate(['/shopping-list']);
  }

  isAuthenticated(){
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    return (loggedInUser!=null);
  }

  onLogOut(){
    sessionStorage.clear();
    this.userService.nameEmit.emit("User");
    this.router.navigate(['/recipes'])
  }

  isAdmin(){
    return this.userService.isAdmin();
  }


}
