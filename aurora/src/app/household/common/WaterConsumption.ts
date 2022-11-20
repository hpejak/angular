import {WaterBilling} from "./WaterBilling";

export class WaterConsumption {

  constructor(
    public id: number,
    public monthReferred: Date,
    public totalConsumption: number,
    public upstairsConsumption: number,
    public downstairsConsumption: number,
    public courtyardHouseConsumption: number,
    public waterConsumptionRest: number,
    public totalDifference: number,
    public upstairsDifference: number,
    public downstairsDifference: number,
    public courtyardHouseDifference: number,
    public cubicPrice: number,
    public flatFee: number,
    public calculatedPrice: number,
    public waterBilling: WaterBilling,
    public insertTimestamp: Date
  ) {
  }
}
