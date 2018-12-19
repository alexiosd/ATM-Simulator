import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('amountInput') amountInput: ElementRef;

  title = 'app';
  Arr = Array; // Array type captured in a variable
  num: number = 10;

  onPressMe(value: Number) {
    if (this.amountInput.nativeElement.value === '$0') {
      this.amountInput.nativeElement.value = '$' + value;
    } else {
      this.amountInput.nativeElement.value = this.amountInput.nativeElement.value + value;
    }
  }
}
