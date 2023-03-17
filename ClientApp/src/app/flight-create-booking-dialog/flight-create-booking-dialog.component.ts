import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface FlightBookingDialogData {
  passportNumber: string;
}
@Component({
  selector: 'app-flight-create-booking-dialog',
  templateUrl: './flight-create-booking-dialog.component.html',
  styleUrls: ['./flight-create-booking-dialog.component.css']
})
export class FlightCreateBookingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FlightCreateBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FlightBookingDialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
