import { Component, OnInit } from '@angular/core';

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
}
