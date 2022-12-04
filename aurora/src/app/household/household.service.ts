import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WaterConsumptionPage} from "./common/WaterConsumptionPage";

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
  private householdApi: string = 'http://pejak.ddns.net:10082/';

  constructor(private httpClient: HttpClient) {
  }

  getWaterConsumption(): Observable<WaterConsumptionPage> {
    console.debug("Called records for water consumption");

    return this.httpClient.get<WaterConsumptionPage>(this.householdApi + 'getWaterConsumption/');
  }

  addWaterConsumption() {
    this.httpClient.post(this.householdApi + 'addWaterConsumption/', {})
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

}

