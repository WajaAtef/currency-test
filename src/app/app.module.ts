import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyDetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
