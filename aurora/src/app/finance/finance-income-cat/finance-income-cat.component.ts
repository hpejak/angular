import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-finance-income-cat',
  templateUrl: './finance-income-cat.component.html',
  styleUrls: ['./finance-income-cat.component.css']
})
export class FinanceIncomeCatComponent implements OnInit {
  incomeName: string = '';
  incomeDescription: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onIncomeAdd() {
    // Sent Post to Database
    this.http.post('http://localhost:10080/addIncomeCat/',
      {name: this.incomeName, description: this.incomeDescription}
    ).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error)
      }
    });
  }

}
