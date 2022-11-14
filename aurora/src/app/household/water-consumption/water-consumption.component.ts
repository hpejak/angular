import { Component, OnInit } from '@angular/core';
import {WaterConsumption} from "../common/WaterConsumption";
import {HouseholdService} from "../household.service";

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {

  waterConsumption!: WaterConsumption[];

  constructor(private householdService: HouseholdService) { }

  ngOnInit(): void {
      this.handleWaterConsumption();
  }

  private handleWaterConsumption(){
    this.householdService.getWaterConsumption().subscribe(data=>this.waterConsumption = data)
  }

  restWaterEntry(waterEntry: WaterConsumption) {
    return waterEntry.total_consumption -
      (waterEntry.upstairs_consumption + waterEntry.downstairs_consumption + waterEntry.courtyard_house_consumption)
  }
}
