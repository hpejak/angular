import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-water-consumption-view',
  templateUrl: './water-consumption-view.component.html',
  styleUrls: ['./water-consumption-view.component.css']
})
export class WaterConsumptionViewComponent implements OnInit {
  @Input()
  waterBillCalculatedValue: number;

  constructor() { }

  ngOnInit(): void {
  }

}
