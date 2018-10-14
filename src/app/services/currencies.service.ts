import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from '../models/currency.model';
import {map} from 'rxjs/operators';
import {QueryParams} from '../models/query-params.model';
import {CurrenciesPagination} from '../models/pagination.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) {
  }

  // apiUrl: 'assets/json/currencies.json';

  public findone(id: string): Observable<Currency> {

    const options = {
      headers: this.getApiHeaders()
    };

    return this.http.get(environment.apiUrl + '/' + id, options)
      .pipe(map((response: any) => {
          const currency = new Currency(response.data);

          return currency;
        }),
      );
  }

  private getApiHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.api+json'
    });
    return headers;
  }

  private buildHttpParams(queryParams: QueryParams): HttpParams {

    if (queryParams.filterValue !== undefined && queryParams.filterValue.length > 0) {
      const filterValue = queryParams.filterValue;
      const filterKey = queryParams.filterKey === 'any' ? 'search' : queryParams.filterKey;

      return new HttpParams()
        .append('page[number]', queryParams.pageIndex.toString()).append('page[size]',
          queryParams.pageSize.toString()).append(`filter[${filterKey}]`, filterValue);
    }

    return new HttpParams()
      .append('page[number]', queryParams.pageIndex.toString()).append('page[size]', queryParams.pageSize.toString());
  }

  public findall(queryParams: QueryParams): Observable<CurrenciesPagination> {

    const params: HttpParams = this.buildHttpParams(queryParams);

    const options = {
      params: params,
      headers: this.getApiHeaders()
    };

    return this.http.get(environment.apiUrl, options)
      .pipe(map((response: any) => {

          const currenciesPage = new CurrenciesPagination(response);
          return currenciesPage;

        }),
      );
  }

}
