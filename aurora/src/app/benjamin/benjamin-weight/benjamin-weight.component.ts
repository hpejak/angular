import { Component, OnInit } from '@angular/core';
import {BenjaminWeight} from "./benjamin-weight.model";
import {BenjaminWeightService} from "./benjamin-weight.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-benjamin-weight',
  templateUrl: './benjamin-weight.component.html',
  styleUrls: ['./benjamin-weight.component.css']
})
export class BenjaminWeightComponent implements OnInit {

  weights: BenjaminWeight[] = [];

  constructor(private http: HttpClient, private benjaminWeightService: BenjaminWeightService) {
    console.debug('Benjamin Weight Component ctor');

  }

  ngOnInit(): void {
    console.debug('Benjamin Weight Component ngOnInit');
    this.weights = this.benjaminWeightService.getBenjaminWeights();
    console.debug('Weights after get: ' + JSON.stringify(this.weights))
  }

}
