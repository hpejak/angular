import {WaterIndividualPayment} from "./WaterIndividualPayment";

export class WaterBilling {

  constructor(
    public billingId: number,
    public calculatedCost: number,
    public billPrice: number,
    public flatFee: number,
    public cubicPrice: number,
    public waterIndividualPayments: WaterIndividualPayment[],
    public insertTimestamp: Date
  ) {
  }
}
