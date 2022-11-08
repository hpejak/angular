import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {WaterConsumption} from "./common/WaterConsumption";

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
  private waterConsumptionApi: string = 'http://pejak.ddns.net:10082/getWaterConsumption/';

  constructor(private httpClient: HttpClient) {
  }

  getWaterConsumption(): Observable<WaterConsumption[]> {
    return this.httpClient.get<WaterConsumption[]>(this.waterConsumptionApi)
      .pipe(
      map((response: WaterConsumption[]) => response)
    )
  }

}
