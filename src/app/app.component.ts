import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('valueInput') valueInput: ElementRef;

  title = 'app';
  Arr = Array; // Array type captured in a variable
  num: number = 10;

  onPressMe(value: Number) {
    this.valueInput.nativeElement.value = value;
  }
}
