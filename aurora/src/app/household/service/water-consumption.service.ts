import {Injectable} from '@angular/core';
import {WaterConsumption} from "../common/WaterConsumption";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaterConsumptionService {

  waterConsumptionDetails: Subject<WaterConsumption | null> = new BehaviorSubject<WaterConsumption | null>(null);

  constructor() {
  }

  passWaterConsumption(waterConsumption: WaterConsumption) {
    console.debug("passWaterConsumption WaterConsumptionService " + JSON.stringify(waterConsumption));
    this.waterConsumptionDetails.next(waterConsumption)
  }
}
