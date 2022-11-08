export class WaterConsumption {

  constructor(
    public id: number,
    public month_referred: Date,
    public total_consumption: number,
    public upstairs_consumption: number,
    public downstairs_consumption: number,
    public courtyard_house_consumption: number,
    public insert_timestamp: Date) {
  }
}
