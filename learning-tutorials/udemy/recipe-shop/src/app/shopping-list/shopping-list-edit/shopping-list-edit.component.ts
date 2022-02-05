import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addedIngredient = new EventEmitter<Ingredient>()

  @ViewChild('nameInput',{static: false}) inputName: ElementRef;
  @ViewChild('amountInput',{static: false}) inputAmount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.addedIngredient.emit(new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value));
  }
}
