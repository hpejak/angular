import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaterConsumptionComponent } from './water-consumption/water-consumption.component';
import {WaterConsumptionViewComponent} from './water-consumption/water-consumption-view/water-consumption-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterConsumptionComponent,
    WaterConsumptionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
