import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  clickActiveCount = 0;
  clickInactiveCount = 0;
  clickCumulativeCount = 0;

  onActiveClick() {
    this.clickActiveCount++;
    this.clickCumulativeCount++;
    console.log('This is ' + this.clickActiveCount + ' active click and ' +
      this.clickCumulativeCount + ' cumulative count');
  }

  onInactiveClick() {
    this.clickInactiveCount++;
    this.clickCumulativeCount++;
    console.log('This is ' + this.clickInactiveCount + ' active click and ' +
      this.clickCumulativeCount + ' cumulative count');
  }

}
