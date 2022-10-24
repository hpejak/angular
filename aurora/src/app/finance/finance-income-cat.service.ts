import {Injectable} from "@angular/core";
import {FinanceCat} from "./finance-cat.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FinanceIncomeCatService {
  private incomeCategoriesList: FinanceCat[] = [];

  constructor(private http: HttpClient) {
    console.debug('Finance Income Cat Constructor')
    this.updateIncomeCat()
  }


  updateIncomeCat() {
    console.debug('Finance Income Cat update')
    this.http.get('http://pejak.ddns.net:10080/getIncomeCategories/').subscribe({
      next: (data: any) => {
        this.incomeCategoriesList = data;
        console.debug('Finance data is here :' + JSON.stringify(data));
      }
    })
  }

  getIncomeData() {
    console.debug('Finance Income Cat get')
    return this.incomeCategoriesList;
  }

}
