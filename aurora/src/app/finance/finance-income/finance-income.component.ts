import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-finance-income',
  templateUrl: './finance-income.component.html',
  styleUrls: ['./finance-income.component.css']
})
export class FinanceIncomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
