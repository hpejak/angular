import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import {DatabaseConnectionsComponent} from './database-connections/database-connections.component';
import {FormsModule} from "@angular/forms";
import {FinanceComponent} from './finance/finance.component';
import {FinanceIncomeComponent} from './finance/finance-income/finance-income.component';
import {FinanceIncomeCatComponent} from './finance/finance-income-cat/finance-income-cat.component';
import {FinanceIncomeCatService} from "./finance/finance-income-cat.service";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'income', component: FinanceComponent},
  {path: 'database', component: DatabaseConnectionsComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo:'/home', pathMatch:'full'}
];

const appInitializerFn = (financeIncomeCatService: FinanceIncomeCatService) => {
  return () => {
    return financeIncomeCatService.getIncomeData();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DatabaseConnectionsComponent,
    FinanceComponent,
    FinanceIncomeComponent,
    FinanceIncomeCatComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FinanceIncomeCatService, {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFn,
    multi: true,
    deps: [FinanceIncomeCatService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
