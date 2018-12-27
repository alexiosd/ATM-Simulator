import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  banknotes: Array<Object>;
  error: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  amountInput = 0;
  title = 'app';
  Arr = Array; // Array type captured in a variable
  num = 9;

  banknotes: Array<Object>;
  name: string;
  error: string;

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
  }

  onPressMe(value: number) {
    if ((this.amountInput === 0) && (value !== 0)) {
      this.amountInput = value;
    } else {
      const conc = this.amountInput.toString() + value;
      this.amountInput = +conc * 1;
    }
  }

  onDelete() {
    if (this.amountInput > 9) {
      let theAmount = this.amountInput.toString();
      theAmount = theAmount.slice(0, theAmount.length - 1);
      this.amountInput = +theAmount * 1;
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
        const dialogRef = this.dialog.open(AppSuccessComponent, {
          width: '250px',
          data: {banknotes: data}
        });
      },
      error => {
        console.log('Error', error);
        const dialogRef = this.dialog.open(AppErrorComponent, {
          width: '350px',
          data: {error: error.error}
        });
      }
    );
  }
}

@Component({
  selector: 'app-success',
  templateUrl: 'app.success.component.html',
})
export class AppSuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<AppSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-error',
  templateUrl: 'app.error.component.html',
})
export class AppErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<AppErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
