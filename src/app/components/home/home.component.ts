import { Component, OnInit } from '@angular/core';
import {Currency} from '../../models/currency.model';
import {QueryParams} from '../../models/query-params.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: Currency[];
  gridByBreakpoint = {
    xl: 6,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 2
  };

  currenciesNumber;
  queryParams: QueryParams;

  currencys = [
    {value: 'id', viewValue: 'Id'},
    {value: 'code', viewValue: 'Code'},
    {value: 'name', viewValue: 'Name'},
    {value: 'type', viewValue: 'Type'}
  ];
  constructor() { }

  ngOnInit() {
  }
  pageChanged() {
    this.queryParams.pageIndex = this.paginator.pageIndex + 1;
    this.queryParams.pageSize = this.paginator.pageSize;
    this.initCurrencies();
  }
}
