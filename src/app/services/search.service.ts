import { Injectable } from '@angular/core';
import { QueryParams } from '../models/query-params.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _params: QueryParams;

  get params(): QueryParams {
    return this._params;
  }

  set params(theParams: QueryParams) {
    this._params = theParams;
  }
}
