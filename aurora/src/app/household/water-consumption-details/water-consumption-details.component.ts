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

  waterConsumption: WaterConsumption | null = null;

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
        this.waterConsumption = data;
        console.debug(">> >>>> handleWaterConsumptionDetails " + JSON.stringify(data))
      }
    );
  }


}
