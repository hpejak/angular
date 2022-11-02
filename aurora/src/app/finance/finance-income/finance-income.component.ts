import {Component, OnInit} from '@angular/core';
import {FinanceCat} from "../finance-cat.model";
import {FinanceIncomeCatService} from "../finance-income-cat.service";
import {HttpClient} from "@angular/common/http";

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
    console.debug('Finance Income Constructor')
  }

  ngOnInit(): void {
    this.initIncomeData();
    console.debug("Finance Income data: " + JSON.stringify(this.financeCategories))
  }

  private initIncomeData() {
    this.financeIncomeCatService.getIncomeCatData().subscribe(
      (data: any) => {
        console.debug('Finance Categories = ' + JSON.stringify(data));
        this.financeCategories = data
      }
    );
  }


}
