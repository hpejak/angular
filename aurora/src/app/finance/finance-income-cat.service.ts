import {Injectable} from "@angular/core";
import {FinanceCat} from "./finance-cat.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FinanceIncomeCatService {
  private incomeCategoriesList: FinanceCat[] = [];

  constructor(private http: HttpClient) {
    console.log('Finance Income Cat Constructor')
    this.updateIncomeCat()
  }



  updateIncomeCat() {
    console.log('Finance Income Cat update')
    this.http.get('http://pejak.ddns.net:10080/getIncomeCategories/',).subscribe({
      next: (data: any) => {
        this.incomeCategoriesList = data;
        console.log('Data are here' + data);
      }
    })
  }

  getIncomeData() {
    console.log('Finance Income Cat get')
    return this.incomeCategoriesList;
  }

}
