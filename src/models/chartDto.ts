export class ChartDto {
  stockValues: Number[];
  stockDates: any[];
  constructor(stockValues: Number[], stockDates: Number[]) {
    this.stockValues = stockValues;
    this.stockDates = stockDates;
  }
}
