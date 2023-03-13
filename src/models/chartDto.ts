export class ChartDto {
  private _stockValues: Number[];
  private _stockDates: any[];

  constructor(stockValues?: Number[], stockDates?: any[]) {
    this._stockValues = stockValues!;
    this._stockDates = stockDates!;
  }

  public get stockValues(): Number[] {
    return this._stockValues;
  }

  public set stockValues(stockValues: Number[]) {
    this._stockValues = stockValues;
  }

  public get stockDates(): Number[] {
    return this._stockDates;
  }

  public set stockDates(stockDates: any[]) {
    this._stockDates = stockDates;
  }
}
