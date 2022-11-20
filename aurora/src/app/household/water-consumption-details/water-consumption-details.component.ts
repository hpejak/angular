import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-water-consumption-details',
  templateUrl: './water-consumption-details.component.html',
  styleUrls: ['./water-consumption-details.component.css']
})
export class WaterConsumptionDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleWaterConsumptionDetails();
    })
  }


  private handleWaterConsumptionDetails() {

  }
}
