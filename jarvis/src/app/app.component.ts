import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jarvis';
  fullDate: Date = new Date();

  dateDay: number = this.fullDate.getUTCDate();
  dateMonth: string = this.fullDate.toLocaleDateString('HR');

  waterBillCalculatedValue = 0;

  onWaterBillCalculation(billData: {waterConsumption: number, cubicPrice: number, lumpSum: number}): void {
    this.waterBillCalculatedValue = (billData.waterConsumption * billData.cubicPrice) + billData.lumpSum;
  }
}

