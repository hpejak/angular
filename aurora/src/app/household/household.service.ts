import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WaterConsumptionPage} from "./common/WaterConsumptionPage";
import {Currency} from "./common/Currency";

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
  private householdApi: string = 'http://pejakapi.ddns.net:10082/';

  constructor(private httpClient: HttpClient) {
  }

  getWaterConsumption(page: number): Observable<WaterConsumptionPage> {
    console.debug("Called records for water consumption");

    return this.httpClient.get<WaterConsumptionPage>(this.householdApi
      + 'getWaterConsumption?page=' + page
      + '&pageSize=5');
  }

  getCurrency():Observable<Currency[]>{
    return this.httpClient.get<Currency[]>(this.householdApi + 'getCurrency')
  }

  addWaterConsumption() {
    this.httpClient.post(this.householdApi + 'addWaterConsumption/', {})
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

}

