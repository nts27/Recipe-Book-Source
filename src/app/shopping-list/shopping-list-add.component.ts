import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Ingredients} from "../ingredients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  isAdd = true;
  @Input() item: Ingredients;
  @Output() formClear = new EventEmitter();

  constructor(private sls : ShoppingListService) { }

  ngOnChanges(changes){
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name:null, amount:null};
    }else {
      this.isAdd = false;
    }
  }



  onSubmit(ingredient: Ingredients) {
    if (!this.isAdd) {
      this.sls.editItem(this.item, new Ingredients(ingredient.name, ingredient.amount));
      this.onClear();
    } else {
      this.item = new Ingredients(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
      this.onClear();
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd=true;
    this.formClear.emit();
  }

}
