import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: '.',
  precision: 0,
  prefix: '$',
  suffix: '',
  thousands: ',',
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
