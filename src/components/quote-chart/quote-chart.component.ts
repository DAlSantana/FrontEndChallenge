import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDto } from 'src/models/chartDto';
@Component({
  selector: 'app-quote-chart',
  templateUrl: './quote-chart.component.html',
  styleUrls: ['./quote-chart.component.scss'],
})
export class QuoteChartComponent {
  @Input() chartData: any;

  @ViewChild('meuCanvas', { static: true }) elemento = {} as ElementRef;

  constructor() {}

  public ngOnInit() {}

  private createLineChart(): void {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartData.stockDates,
        datasets: [
          {
            data: this.chartData.stockValues,
            borderColor: '#000',
            fill: false,
            label: 'Variação',
          },
        ],
      },

      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(context.parsed.y);
                }
                if (context.dataIndex !== 0) {
                  let previousValue = Number(
                    context.dataset.data[context.dataIndex - 1]
                  );
                  let currentValue = Number(
                    context.dataset.data[context.dataIndex]
                  );
                  label += ` Variação de R$ ${(
                    currentValue - previousValue
                  ).toPrecision(5)}`;
                }
                return label;
              },
            },
          },
        },
      },
    });
  }
}
