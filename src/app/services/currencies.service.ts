import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor() { }
  public findall(queryParams: QueryParams): Observable<CurrenciesPagination> {

    const params: HttpParams = this.buildHttpParams(queryParams);

    const options = {
      params: params,
      headers: this.getApiHeaders()
    };

    return this.http.get(this.apiUrl, options)
      .pipe(map((response: any) => {

          const currenciesPage = new CurrenciesPagination(response);
          return currenciesPage;

        }),
      );
  }

}
