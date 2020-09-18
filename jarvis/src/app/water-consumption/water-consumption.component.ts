import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

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

  @Output()
  calculateWaterBill = new EventEmitter<{waterConsumption: number, cubicPrice: number, lumpSum: number}>();

  inputWaterMeter1: HTMLInputElement;
  inputWaterMeter2: HTMLInputElement;
  inputWaterMeter3: HTMLInputElement;

  checkSumAndBill(): boolean{
      return this.inputWaterConsumptionSum.nativeElement.value === this.inputWaterConsumptionBill.nativeElement.value;
  }

  calculateBillSum(): void {
    if (this.checkSumAndBill()) {
      this.onCalculateBillSum();
    }
  }

  onCalculateBillSum(): void{
    this.calculateWaterBill.emit({
      waterConsumption: this.inputWaterConsumptionBill.nativeElement.value,
      cubicPrice: this.cubicPrice,
      lumpSum: this.lumpSum
    });
  }

  ngOnInit(): void {
  }

}
