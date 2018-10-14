import { Component, OnInit } from '@angular/core';
import {Currency} from '../../models/currency.model';
import {QueryParams} from '../../models/query-params.model';
import {ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {CurrenciesService} from '../../services/currencies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('grid') grid: MatGridList;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
  constructor(private currenciesService: CurrenciesService, private snackbar: MatSnackBar, private router: Router,
              private observableMedia: ObservableMedia, private searchService: SearchService) { }

  ngOnInit() {
    this.initQueryParams();
  }
  public showDetails(id: string) {
    this.searchService.params = this.queryParams;
    this.router.navigate(['/currency/' + id]);
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  private initQueryParams() {

    if(this.searchService.params === undefined)
    {
      this.queryParams = new QueryParams();
      this.queryParams.pageIndex = 1;
      this.queryParams.pageSize = 10;
      this.queryParams.filterKey = 'any';

    } else {
      this.queryParams = this.searchService.params;
    }
    this.initCurrencies();
  }

  private initCurrencies() {
    this.currenciesService.findall(this.queryParams).subscribe(_currenciesPage => {
      this.currencies = _currenciesPage.currencies;
      this.currenciesNumber = _currenciesPage.total;
    });
  }

  attributeChanged(key) {
    this.queryParams.filterKey = key;
    if (this.queryParams.filterValue !== undefined && this.queryParams.filterValue.length > 0) {
      this.initCurrencies();
    }
  }
  keyChanged(value) {
    this.queryParams.filterValue = value;
    this.initCurrencies();
  }
  pageChanged() {
    this.queryParams.pageIndex = this.paginator.pageIndex + 1;
    this.queryParams.pageSize = this.paginator.pageSize;
    this.initCurrencies();
  }
}
