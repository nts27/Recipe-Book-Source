import {Component, NgModule, OnInit} from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {Ingredients} from "../ingredients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

@NgModule({
  declarations: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {

  items: Ingredients[] = [];
  selectedItem: Ingredients = null;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectItem(item: Ingredients){
    this.selectedItem = item;
  }

  onClear(){
    this.selectedItem = null;
  }

}
