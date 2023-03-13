import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChartDto } from 'src/models/chartDto';
import { Interval } from 'src/models/interval.enum';
import { Range } from 'src/models/range.enum';
import { TimeConverter } from 'src/utils/timeConverter';
import { ProxyService } from '../proxy/proxy.service';
@Injectable({
  providedIn: 'root',
})
export class AdapterSetvice {
  subject = new Subject<any>();
  subJectDto = new Subject<ChartDto>();
  constructor(
    private proxyService: ProxyService,
    private timeConverterService: TimeConverter
  ) {}

  public getStockValues(stock: string, interval: Interval, range: Range) {
    this.proxyService
      .consultStockVaration(stock, interval, range)
      .subscribe((res) => {
        this.subject.next(res);
      });
    return this.converterchartServiceToChartDto();
  }

  public converterchartServiceToChartDto(): Observable<ChartDto> {
    this.subject.subscribe((sub: any) => {
      let datesFormated: any = [];
      sub.chart.result[0].timestamp.forEach((timeUnformated: number) =>
        datesFormated.push(
          this.timeConverterService.convertTimeSteampToBrazilianDateTime(
            timeUnformated
          )
        )
      );
      let chartDto = new ChartDto(
        sub.chart.result[0].indicators.quote[0].open,
        datesFormated
      );
      this.subJectDto.next(chartDto);
    });
    return this.subJectDto;
  }
}
