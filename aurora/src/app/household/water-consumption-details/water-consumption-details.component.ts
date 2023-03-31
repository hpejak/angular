import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WaterConsumptionService} from "../service/water-consumption.service";
import {WaterConsumption} from "../common/WaterConsumption";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-water-consumption-details',
  templateUrl: './water-consumption-details.component.html',
  styleUrls: ['./water-consumption-details.component.css']
})
export class WaterConsumptionDetailsComponent implements OnInit {

  waterConsumptionDetailsFormGroup!: FormGroup;
  waterConsumption: WaterConsumption | null = null;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private waterConsumptionService: WaterConsumptionService) {
  }

  ngOnInit(): void {
    console.debug("ngOnInt WaterConsumptionDetailsComponent")
    this.handleWaterConsumptionDetails();

    if (this.waterConsumption) {
      this.populateForm();
    }
  }

  private populateForm() {
    this.waterConsumptionDetailsFormGroup = this.formBuilder.group({
      difference: this.formBuilder.group({
        totalDifference: new FormControl(this.waterConsumption?.totalDifference, [Validators.required]),
        upstairsDifference: new FormControl(
          this.waterConsumption?.upstairsDifference,
          [Validators.required]),
        downstairsDifference: new FormControl(
          this.waterConsumption?.downstairsDifference,
          [Validators.required]),
        courtyardHouseDifference: new FormControl(
          this.waterConsumption?.courtyardHouseDifference,
          [Validators.required])
      }),
      consumption: this.formBuilder.group({
        totalConsumption: new FormControl(this.waterConsumption?.totalConsumption, [Validators.required]),
        downstairsConsumption: new FormControl(
          this.waterConsumption?.downstairsConsumption,
          [Validators.required])
      })
    });
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


  onSubmit() {
    console.log("Changing params!")
  }
}
