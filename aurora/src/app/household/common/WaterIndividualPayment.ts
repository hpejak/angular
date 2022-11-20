export class WaterIndividualPayment {

  constructor(
    public waterPaymentId: number,
    public name: string,
    public calculatedPrice:number,
    public paymentPrice: number,
    public error: string,
    public paymentDate: Date
) {


}
}
