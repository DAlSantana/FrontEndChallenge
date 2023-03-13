import { Component } from '@angular/core';
import { ChartService } from 'src/acl/service/chart.service';
import { ChartDto } from 'src/models/chartDto';
import { Interval } from 'src/models/interval.enum';
import { Range } from 'src/models/range.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public chartdata: ChartDto;
  constructor(private chartService: ChartService) {}

  public ngOnInit() {
    this.chartService
      .getChartData(`PETR4.SA`, Interval.day, Range.month)
      .subscribe((res) => (this.chartdata = res));
  }
}
