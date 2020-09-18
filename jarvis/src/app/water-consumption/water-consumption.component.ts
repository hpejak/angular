import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent implements OnInit {

  constructor() { }

  outputValue = 0;
  cubicPrice = 11.66;
  lumpSum = 31.33;

  @ViewChild('inputWaterConsumptionSum', {static: true}) inputWaterConsumptionSum: ElementRef;
  @ViewChild('inputWaterConsumptionBill', {static: true}) inputWaterConsumptionBill: ElementRef;

  inputWaterMeter1: HTMLInputElement;
  inputWaterMeter2: HTMLInputElement;
  inputWaterMeter3: HTMLInputElement;

  checkSumAndBill(): boolean{
      return this.inputWaterConsumptionSum.nativeElement.value === this.inputWaterConsumptionBill.nativeElement.value;
  }

  calculateBillSum(): void {
    if (this.checkSumAndBill()) {
      this.outputValue = (this.inputWaterConsumptionBill.nativeElement.value * this.cubicPrice) + this.lumpSum;
    }
  }

  ngOnInit(): void {
  }

}
