import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDto } from 'src/models/chartDto';
@Component({
  selector: 'app-quote-chart',
  templateUrl: './quote-chart.component.html',
  styleUrls: ['./quote-chart.component.scss'],
})
export class QuoteChartComponent {
  @Input() chartDto: ChartDto;

  @ViewChild('canvas', { static: true }) element = {} as ElementRef;

  constructor() {}

  public ngOnInit() {
    this.createLineChart();
  }

  private createLineChart(): void {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartDto.stockDates,
        datasets: [
          {
            data: this.chartDto.stockValues,
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
                // Aqui se coloca as labels da variação do preço da ação.
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
