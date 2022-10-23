export class BenjaminWeight {
  public id: number;
  public date: Date;
  public weight: number;
  public weighting_scale: String;

  constructor(id: number, date: Date, weight: number, weighting_scale: String) {
    this.id = id;
    this.date = date;
    this.weight = weight;
    this.weighting_scale = weighting_scale;
  }
}
