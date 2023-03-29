import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WaterConsumptionService} from "../service/water-consumption.service";
import {WaterConsumption} from "../common/WaterConsumption";

@Component({
  selector: 'app-water-consumption-details',
  templateUrl: './water-consumption-details.component.html',
  styleUrls: ['./water-consumption-details.component.css']
})
export class WaterConsumptionDetailsComponent implements OnInit {

  // waterConsumption: WaterConsumption = new WaterConsumption();
  upstairsConsumption: number = 0;

  constructor(private route: ActivatedRoute,
              private waterConsumptionService: WaterConsumptionService) {
  }

  ngOnInit(): void {
    console.debug("ngOnInt WaterConsumptionDetailsComponent")
    this.handleWaterConsumptionDetails();
    //
    // this.route.paramMap.subscribe(() => {
    // })
  }


  private handleWaterConsumptionDetails() {
    console.debug(">> >>>> handleWaterConsumptionDetails");
    this.waterConsumptionService.waterConsumptionDetails.subscribe(
      data => {
        this.upstairsConsumption = data.upstairsConsumption;
        console.debug(">> >>>> handleWaterConsumptionDetails " + JSON.stringify(data))
      }
    );
  }


}
