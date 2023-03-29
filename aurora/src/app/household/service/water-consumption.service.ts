import {Injectable} from '@angular/core';
import {WaterConsumption} from "../common/WaterConsumption";
import {ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaterConsumptionService {

  waterConsumptionDetails: Subject<WaterConsumption> = new ReplaySubject<WaterConsumption>();

  constructor() {
  }

  passWaterConsumption(waterConsumption: WaterConsumption) {
    console.debug("passWaterConsumption WaterConsumptionService " + JSON.stringify(waterConsumption));
    this.waterConsumptionDetails.next(waterConsumption)
  }
}
