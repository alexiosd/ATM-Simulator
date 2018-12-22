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

  onDelete() {
    if (this.amountInput > 9) {
      let theAmount = this.amountInput.toString();
      theAmount = theAmount.slice(0, theAmount.length - 1);
      this.amountInput = theAmount * 1;
    } else {
      this.amountInput = 0;
    }
  }
}
