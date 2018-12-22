import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  amountInput: number = 0;
  title = 'app';
  Arr = Array; // Array type captured in a variable
  num: number = 9;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
  }

  onPressMe(value: number) {
    if ((this.amountInput === 0) && (value !== 0)) {
      this.amountInput = value;
    } else {
      let conc = this.amountInput.toString() + value;
      this.amountInput = conc * 1;
    }
  }

  onDelete() {
    if (this.amountInput > 9) {
      let theAmount = this.amountInput.toString();
      theAmount = theAmount.slice(0, theAmount.length - 1);
      this.amountInput = theAmount * 1;
    } else {
      this.amountInput = 0;
    }
  }

  withdraw() {
    this.httpClient
    .post('https://us-central1-atm-backend-2cc1b.cloudfunctions.net/withdraw', {'amount': this.amountInput})
    .subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
