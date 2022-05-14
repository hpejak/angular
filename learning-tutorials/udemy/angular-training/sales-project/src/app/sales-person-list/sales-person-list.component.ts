import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar", "anup.kumar@luc2code.com",50000),
    new SalesPerson("John","Doe", "john.doe@luc2code.com",40000),
    new SalesPerson("Claire","Murphy", "claire.murphy@luc2code.com",90000),
    new SalesPerson("Mai","Troung", "mai.troung@luc2code.com",60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
