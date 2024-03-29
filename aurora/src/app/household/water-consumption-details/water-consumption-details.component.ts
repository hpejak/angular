import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WaterConsumptionService} from "../service/water-consumption.service";
import {WaterConsumption} from "../common/WaterConsumption";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HouseholdService} from "../household.service";
import {Currency} from "../common/Currency";

@Component({
  selector: 'app-water-consumption-details',
  templateUrl: './water-consumption-details.component.html',
  styleUrls: ['./water-consumption-details.component.css']
})
export class WaterConsumptionDetailsComponent implements OnInit {

  waterConsumptionDetailsFormGroup!: FormGroup;
  waterConsumption: WaterConsumption | null = null;
  currencies!: Currency[];

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private waterConsumptionService: WaterConsumptionService,
              private householdService: HouseholdService) {
  }

  ngOnInit(): void {
    console.debug("ngOnInt WaterConsumptionDetailsComponent")
    this.handleWaterConsumptionDetails();
    this.getCurrencies();
    let initWaterConsumption = sessionStorage.getItem('waterConsumption')
    if (initWaterConsumption != null) {
      this.waterConsumption = JSON.parse(initWaterConsumption);
      console.log("Water consumption in initWater: " + JSON.stringify(this.waterConsumption))
    }

    let initCurrencies = sessionStorage.getItem('currencies')
    if (initCurrencies != null) {
      this.currencies = JSON.parse(initCurrencies);
      console.log("Currencies: " + JSON.stringify(this.currencies))
    }

    if (this.waterConsumption) {
      this.populateForm();
    }

  }

  private populateForm() {
    this.waterConsumptionDetailsFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        monthReferred: new FormControl(this.waterConsumption?.monthReferred, [Validators.required]),
        flatFee: new FormControl(this.waterConsumption?.waterBilling?.flatFee, [Validators.required]),
        cubicPrice: new FormControl(
          this.waterConsumption?.waterBilling?.cubicPrice,
          [Validators.required]),
        currency: new FormControl(
          this.waterConsumption?.waterBilling?.currency.sign,
          [Validators.required])
      }),
      difference: this.formBuilder.group({
        totalDifference: new FormControl(this.waterConsumption?.totalDifference, [Validators.required]),
        waterConsumptionRest: new FormControl(
          this.waterConsumption?.waterConsumptionRest,
          [Validators.required]),
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
          [Validators.required]),
        upstairsConsumption: new FormControl(
          this.waterConsumption?.upstairsConsumption,
          [Validators.required]),
        courtyardHouseConsumption: new FormControl(
          this.waterConsumption?.courtyardHouseConsumption,
          [Validators.required]),
      }),
      bill: this.formBuilder.group({
        calculatedCost: new FormControl(
          this.waterConsumption?.waterBilling?.calculatedCost,
          [Validators.required]),
        billPrice: new FormControl(
          this.waterConsumption?.waterBilling?.billPrice,
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

  @HostListener('window:beforeunload', ['$event'])
  saveWaterConsumption() {
    console.log("BEFORE UNLOAD " + JSON.stringify(this.waterConsumption))
    sessionStorage.setItem('waterConsumption', JSON.stringify(this.waterConsumption));
    sessionStorage.setItem('currencies', JSON.stringify(this.currencies));
  }

  private getCurrencies() {
    this.householdService.getCurrency().subscribe((currencyData: Currency[]) => {
      this.currencies = currencyData;
    })
  }

  onSubmit() {
    console.log("Changing params!")
  }

  ngOnDestroy() {
    sessionStorage.clear()
  }

}
