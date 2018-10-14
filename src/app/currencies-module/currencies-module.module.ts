import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatToolbarModule, MatInputModule ,MatSelectModule , MatCardModule, MatGridListModule, MatDividerModule, MatSnackBarModule,
  MatTableModule,  MatPaginatorModule} from '@angular/material';
import {CurrencyDetailsComponent} from '../components/currency-details/currency-details.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';

const routes: Routes = [
  {
    path: 'currency/:id',
    component: CurrencyDetailsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, CurrencyDetailsComponent]
})
export class CurrenciesModuleModule { }
