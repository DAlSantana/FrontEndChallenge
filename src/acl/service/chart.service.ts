import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDto } from 'src/models/chartDto';
import { Interval } from 'src/models/interval.enum';

import { Range } from 'src/models/range.enum';
import { AdapterSetvice } from '../adapter/adapter.service';
@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private adapterService: AdapterSetvice) {}
  public getChartData(
    stock: string,
    interval: Interval,
    range: Range
  ): Observable<ChartDto> {
    return this.adapterService.getStockValues(stock, interval, range);
  }
}
