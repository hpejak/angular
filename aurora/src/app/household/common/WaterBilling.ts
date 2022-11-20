import {WaterIndividualPayment} from "./WaterIndividualPayment";
import {Currency} from "./Currency";

export class WaterBilling {

  constructor(
    public billingId: number,
    public calculatedCost: number,
    public billPrice: number,
    public flatFee: number,
    public cubicPrice: number,
    public waterIndividualPayments: WaterIndividualPayment[],
    public currency: Currency,
    public insertTimestamp: Date
  ) {
  }
}
