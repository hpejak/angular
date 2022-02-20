import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FinanceCat} from "../finance-cat.model";
import {FinanceIncomeCatService} from "../finance-income-cat.service";

@Component({
  selector: 'app-finance-income',
  templateUrl: './finance-income.component.html',
  styleUrls: ['./finance-income.component.css']
})
export class FinanceIncomeComponent implements OnInit {

  financeCategories: FinanceCat[] = [];

  incomeName: string = '';
  incomeDate: Date = new Date();
  incomeAmount: number = 0.00;

  constructor(private http: HttpClient, private financeIncomeCatService: FinanceIncomeCatService) {
    console.log('Finance Income Constructor')

  }

  ngOnInit(): void {
    console.log('Finance Income ngOnInit')
    this.financeCategories = this.financeIncomeCatService.getIncomeData();
    console.log(this.financeCategories)
  }


}
