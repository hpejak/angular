import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import {DatabaseConnectionsComponent} from './database-connections/database-connections.component';
import {FormsModule} from "@angular/forms";
import { FinanceComponent } from './finance/finance.component';
import { FinanceIncomeComponent } from './finance/finance-income/finance-income.component';
import { FinanceIncomeCatComponent } from './finance/finance-income-cat/finance-income-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DatabaseConnectionsComponent,
    FinanceComponent,
    FinanceIncomeComponent,
    FinanceIncomeCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
