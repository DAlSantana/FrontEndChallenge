import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteChartComponent } from "../components/quote-chart/quote-chart.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { AdapterSetvice } from "src/acl/adapter/adapter.service";
import { ProxyService } from "src/acl/proxy/proxy.service";
import { ChartService } from "src/acl/service/chart.service";
import { NgChartsConfiguration, NgChartsModule } from "ng2-charts";
import { TimeConverter } from "src/utils/timeConverter";

@NgModule({
  declarations: [AppComponent, QuoteChartComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule],
  providers: [
    AdapterSetvice,
    ProxyService,
    ChartService,
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
    TimeConverter,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
