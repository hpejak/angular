import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FinanceCat} from "../finance-cat.model";

@Component({
  selector: 'app-finance-income-cat',
  templateUrl: './finance-income-cat.component.html',
  styleUrls: ['./finance-income-cat.component.css']
})
export class FinanceIncomeCatComponent implements OnInit {

  @Output() incomeCategoriesListener = new EventEmitter<FinanceCat[]>()

  incomeCatName: string = '';
  incomeCatDescription: string = '';
  incomeCategoriesList: FinanceCat[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getIncomeCat()
  }

  getIncomeCat(){

    this.http.get('http://pejak.ddns.net:10080/getIncomeCategories/',).subscribe({
      next: (data:any) => {
        console.log(data);
        this.incomeCategoriesList = data;
        this.incomeCategoriesListener.emit(this.incomeCategoriesList)
      }
    })
  }

  onIncomeCatAdd() {
    // Sent Post to Database
    this.http.post('http://pejak.ddns.net:10080/addIncomeCat/',
      {name: this.incomeCatName, description: this.incomeCatDescription}
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
