import {Component, OnInit} from '@angular/core';
import {WaterConsumption} from "../common/WaterConsumption";
import {HouseholdService} from "../household.service";
import {WaterIndividualPayment} from "../common/WaterIndividualPayment";
import {WaterConsumptionPage} from "../common/WaterConsumptionPage";
import {WaterConsumptionService} from "../service/water-consumption.service";

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {

  consumptionPage: number = 1;
  consumptionPageSize: number = 5;
  consumptionCollectionSize: number = 10;

  waterConsumption!: WaterConsumption[];
  private individualsNum: number = 2;
  private individuals: Map<string, string[]>
    = new Map<string, string[]>([["Pejak", ["upstairs"]], ["Teodorovic", ["downstairs", "courtyard", "rest"]]])

  constructor(private householdService: HouseholdService,
              private waterConsumptionService: WaterConsumptionService) {
  }

  ngOnInit(): void {
    this.handleWaterConsumption();

  }

  handleWaterConsumption() {

    console.debug(`ConsumptionPage=${this.consumptionPage - 1}`)
    this.householdService.getWaterConsumption(this.consumptionPage - 1)
      .subscribe((data: WaterConsumptionPage) => {
          this.consumptionPage = data.pageable.pageNumber + 1;
          this.consumptionPageSize = data.pageable.pageSize;
          this.consumptionCollectionSize = data.totalElements;

          this.waterConsumption = this.calculateWaterConsumption(data.content);
        }
      )
  }

  private calculateWaterConsumption(waterConsumptionData: WaterConsumption[]) {
    const updatedWaterConsumptionData: WaterConsumption[] = [];
    let lastConsumption: WaterConsumption

    Array.from(waterConsumptionData).forEach(waterConsumption => {
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
        waterConsumption.calculatedPrice = this.calculateBillPrice(waterConsumption);
      }
      this.defineIndividualPayments(waterConsumption);
      updatedWaterConsumptionData.push(waterConsumption)
      lastConsumption = waterConsumption;
    })

    return updatedWaterConsumptionData;
  }

  private restWaterEntry(waterEntry: WaterConsumption) {
    return this.roundConsumption(waterEntry.totalDifference -
      (waterEntry.upstairsDifference +
        waterEntry.downstairsDifference +
        waterEntry.courtyardHouseDifference))
  }

  private calculateBillPrice(waterEntry: WaterConsumption) {
    return waterEntry.totalDifference * waterEntry.cubicPrice + waterEntry.flatFee
  }

  private defineIndividualPayments(waterEntry: WaterConsumption) {
    let individualPayments: WaterIndividualPayment[] = waterEntry?.waterBilling?.waterIndividualPayments;

    if ((individualPayments === undefined || individualPayments.length == 0) && waterEntry.waterBilling != null) {
      console.debug("Payments are NOT in DB")

      waterEntry.waterBilling.waterIndividualPayments = this.calculateIndividualPayments(waterEntry);

    } else if (individualPayments !== undefined &&
      individualPayments.length > 0 &&
      individualPayments.length < this.individualsNum &&
      waterEntry.waterBilling != null) {
      console.debug("Payments partially in DB");

      let calculations: WaterIndividualPayment[] = this.calculateIndividualPayments(waterEntry)

      individualPayments.forEach(individualPayment => {
        // TODO This is stupid
        let notDbRecords
          = calculations.filter(item => item.name != individualPayment.name);
        individualPayments.push(...notDbRecords);

        calculations.forEach(calculated => {
          if (individualPayment.name == calculated.name &&
            individualPayment.calculatedPrice != calculated.calculatedPrice) {
            individualPayment.error = 'Mismatch in database data and real time calculated price';
          }
        })
      })

      console.debug("Payments in partial: " + JSON.stringify(individualPayments))

    } else if (individualPayments != null && individualPayments.length == this.individualsNum) {
      console.debug("Payments are in DB")
    }
  }

  private calculateIndividualPayments(waterEntry: WaterConsumption) {
    let individualPayments: WaterIndividualPayment[] = [];

    this.individuals.forEach((key, value) => {
      let waterIndividualPayment: WaterIndividualPayment = {} as WaterIndividualPayment;
      waterIndividualPayment.name = value
      let basicPrice: number = 0

      key.forEach(location => {
        if (waterEntry?.waterBilling?.cubicPrice != null) {
          if (location === "upstairs") {
            basicPrice += (waterEntry.upstairsDifference * waterEntry?.waterBilling?.cubicPrice);
          } else if (location === "downstairs") {
            basicPrice += (waterEntry.downstairsDifference * waterEntry?.waterBilling?.cubicPrice);
          } else if (location === "courtyard") {
            basicPrice += (waterEntry.courtyardHouseDifference * waterEntry?.waterBilling?.cubicPrice);
          } else if (location === "rest") {
            basicPrice += (waterEntry.waterConsumptionRest * waterEntry?.waterBilling?.cubicPrice);
          } else {
            console.warn(location + " is not valid for consumption calculation");
          }
        }
      })
      waterIndividualPayment.calculatedPrice = basicPrice + (waterEntry?.waterBilling?.flatFee / this.individualsNum)
      individualPayments.push(waterIndividualPayment)
    });

    return individualPayments
  }

  private roundConsumption(value: number): number {
    return Math.round(value * 100) / 100
  }

  getYearAndMonth(waterEntry: WaterConsumption) {
    const monthDay: Date = new Date(waterEntry.monthReferred);
    return monthDay.getUTCFullYear() + '-' + (monthDay.toLocaleString('default', {month: 'long'}));
  }

  passWaterConsumption(waterConsumption: WaterConsumption){
    console.debug("passWaterConsumption method in water-consumption component " + JSON.stringify(waterConsumption));
    this.waterConsumptionService.passWaterConsumption(waterConsumption);
  }

}
