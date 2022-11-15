import {Component, OnInit} from '@angular/core';
import {WaterConsumption} from "../common/WaterConsumption";
import {HouseholdService} from "../household.service";

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {

  waterConsumption!: WaterConsumption[];

  constructor(private householdService: HouseholdService) {
  }

  ngOnInit(): void {
    this.handleWaterConsumption();
  }

  private handleWaterConsumption() {
    this.householdService.getWaterConsumption().subscribe(data =>
      this.waterConsumption = this.calculateWaterConsumption(data))
  }

  private calculateWaterConsumption(waterConsumptionData: WaterConsumption[]){
    const updatedWaterConsumptionData: WaterConsumption[] = [];
    let lastConsumption: WaterConsumption

    waterConsumptionData.forEach(waterConsumption => {
      if( lastConsumption ) {
        waterConsumption.totalDifference
          = this.roundConsumption(waterConsumption.totalConsumption - lastConsumption.totalConsumption);
        waterConsumption.upstairsDifference
          = this.roundConsumption(waterConsumption.upstairsConsumption - lastConsumption.upstairsConsumption);
        waterConsumption.downstairsDifference
          = this.roundConsumption(waterConsumption.downstairsConsumption - lastConsumption.downstairsConsumption);
      }
      updatedWaterConsumptionData.push(waterConsumption)
      lastConsumption = waterConsumption;
    })

    return updatedWaterConsumptionData;
  }

  getYearAndMonth(waterEntry: WaterConsumption) {
    const monthDay: Date = new Date(waterEntry.monthReferred);
    return monthDay.getUTCFullYear() + '-' + (monthDay.toLocaleString('default', { month: 'long' }));
  }

  restWaterEntry(waterEntry: WaterConsumption) {
    return waterEntry.totalConsumption -
      (waterEntry.upstairsConsumption + waterEntry.downstairsConsumption + waterEntry.courtyardHouseConsumption)
  }

  private roundConsumption(value: number): number{
    return Math.round(value * 100) / 100
  }

}
