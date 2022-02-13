import { Component, OnInit } from '@angular/core';
import {FinanceCat} from "./finance-cat.model";

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  incomeCategoryPopulate(financeCategories: FinanceCat[]){
    console.log(financeCategories)
  }

}
