import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { AppComponent, AppSuccessComponent, AppErrorComponent } from './app.component';
import { ErrorCurrencyPipe } from './error-currency.pipe';

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
    AppComponent,
    AppSuccessComponent,
    AppErrorComponent,
    ErrorCurrencyPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [ AppSuccessComponent, AppErrorComponent ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AppSuccessComponent, AppErrorComponent ]
})
export class AppModule { }
