import {Injectable} from '@angular/core';
import {BenjaminWeight} from "./benjamin-weight.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BenjaminWeightService {
  private weightApi: string = 'http://pejak.ddns.net:10081/allWeights/';

  constructor(private http: HttpClient) {
    console.debug('Benjamin Weight Service Constructor');
  }

  getBenjaminWeights(): Observable<BenjaminWeight[]> {
    console.debug('Benjamin Weights getBenjaminWeights()');
    return this.updateBenjaminWeight();
  }

  updateBenjaminWeight() {
    console.debug('Benjamin Weight updateBenjaminWeight()');

    return this.http.get<BenjaminWeight[]>(this.weightApi)
      .pipe(
        map((data: BenjaminWeight[]) => data)
      );
  }

}
