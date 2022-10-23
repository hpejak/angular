import {Injectable} from '@angular/core';
import {BenjaminWeight} from "./benjamin-weight.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BenjaminWeightService {
  private weights: BenjaminWeight[] = [];

  constructor(private http: HttpClient) {
    console.debug('Benjamin Weight Service Constructor')
    this.updateBenjaminWeight();
  }

  updateBenjaminWeight() {
    console.debug('Benjamin Weight update')
    this.http.get('http://pejak.ddns.net:10081/allWeights/').subscribe({
      next: (data: any) => {
        this.weights = data
        console.debug('updateBenjaminWeight returns:');
        console.debug(data)
      }
    })
  }

  getBenjaminWeights() {
    console.debug('get Benjamin Weights')
    return this.weights;
  }

}
