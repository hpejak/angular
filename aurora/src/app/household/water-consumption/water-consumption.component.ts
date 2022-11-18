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

  private calculateWaterConsumption(waterConsumptionData: WaterConsumption[]) {
    const updatedWaterConsumptionData: WaterConsumption[] = [];
    let lastConsumption: WaterConsumption

    waterConsumptionData.forEach(waterConsumption => {
      if (lastConsumption) {
        waterConsumption.totalDifference = this.roundConsumption(
          waterConsumption.totalConsumption - lastConsumption.totalConsumption);
        waterConsumption.upstairsDifference = this.roundConsumption(
          waterConsumption.upstairsConsumption - lastConsumption.upstairsConsumption);
        waterConsumption.downstairsDifference = this.roundConsumption(
          waterConsumption.downstairsConsumption - lastConsumption.downstairsConsumption);
        waterConsumption.courtyardHouseDifference = this.roundConsumption(
          waterConsumption.courtyardHouseConsumption - lastConsumption.courtyardHouseConsumption)
        waterConsumption.waterConsumptionRest = this.restWaterEntry(waterConsumption);
        waterConsumption.calculatedPrice =  this.calculateBillPrice(waterConsumption);
      }
      waterConsumption.individualPrice = this.calculateIndividualPrice(waterConsumption);
      updatedWaterConsumptionData.push(waterConsumption)
      lastConsumption = waterConsumption;
    })

    return updatedWaterConsumptionData;
  }

  getYearAndMonth(waterEntry: WaterConsumption) {
    const monthDay: Date = new Date(waterEntry.monthReferred);
    return monthDay.getUTCFullYear() + '-' + (monthDay.toLocaleString('default', {month: 'long'}));
  }

  private restWaterEntry(waterEntry: WaterConsumption) {
    return this.roundConsumption(waterEntry.totalDifference -
      (waterEntry.upstairsDifference +
        waterEntry.downstairsDifference +
        waterEntry.courtyardHouseDifference))
  }

  private calculateBillPrice(waterEntry:WaterConsumption){
    return waterEntry.totalDifference * waterEntry.cubicPrice + waterEntry.flatFee
  }

  private calculateIndividualPrice(waterEntry:WaterConsumption){
    const individuals:number = 2;

    let individualPrices = new Map();

    let upstairsPrice = (waterEntry.upstairsDifference * waterEntry.cubicPrice);
    let downstairsPrice = (waterEntry.downstairsDifference * waterEntry.cubicPrice);
    let corHousePrice = (waterEntry.courtyardHouseDifference * waterEntry.cubicPrice);
    let restPrice = (waterEntry.waterConsumptionRest * waterEntry.cubicPrice);

    individualPrices.set(
      'Pejak',
      this.roundConsumption(upstairsPrice + (waterEntry.flatFee/individuals)))
    individualPrices.set(
      'Teodorović',
      this.roundConsumption(downstairsPrice + corHousePrice + restPrice + (waterEntry.flatFee/individuals)))

    return individualPrices;
  }

  private roundConsumption(value: number): number {
    return Math.round(value * 100) / 100
  }



}
