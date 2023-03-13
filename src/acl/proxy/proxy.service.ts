import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "enviroment";
import { Interval } from "src/models/interval.enum";
import { Range } from "src/models/range.enum";
@Injectable({
  providedIn: "root",
})
export class ProxyService {
  constructor(private httpClient: HttpClient) {}

  public consultStockVaration(
    stock: string,
    interval: Interval,
    range: Range
  ): Observable<any> {
    return this.httpClient.get(
      `${enviroment.test}/${stock}?interval=${interval}&range=${range}`
    );
  }
}
