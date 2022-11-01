import {Injectable} from "@angular/core";
import {FinanceCat} from "./finance-cat.model";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinanceIncomeCatService {

  private incomeCategoryApi = 'http://pejak.ddns.net:10080/getIncomeCategories';

  constructor(private http: HttpClient) {
    console.debug('Finance Income Cat Constructor')
  }

  getIncomeCatData(): Observable<FinanceCat[]> {
    console.debug('Finance Income Cat get')
    return this.updateIncomeCat();
  }

  private updateIncomeCat() {
    console.debug('Finance Income Cat update')

    return this.http.get<FinanceCat[]>(this.incomeCategoryApi).pipe(
        map((response: FinanceCat[]) => response)
      );
  }
}
