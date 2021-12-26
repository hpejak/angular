import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  fullDate: Date = new Date();

  dateDay: number = this.fullDate.getUTCDate();
  dateMonth: string = this.fullDate.toLocaleDateString('HR');

  waterBillCalculatedValue = 0;

  constructor() {
  }
  onWaterBillCalculation(billData: {waterConsumption: number, cubicPrice: number, lumpSum: number}): void {
    this.waterBillCalculatedValue = (billData.waterConsumption * billData.cubicPrice) + billData.lumpSum;
  }
  ngOnInit(): void {
  }

}
