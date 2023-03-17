import {Component, ViewChild} from '@angular/core';
import {Flight} from "../models/flight";
import {FlightService} from "../services/flight.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {
  FlightCreateBookingDialogComponent
} from "../flight-create-booking-dialog/flight-create-booking-dialog.component";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  displayedColumns: string[] = ['flightNumber', 'origin', 'destination', 'departureTime', 'arrivalTime', 'seatsAvailable', 'seatCost', 'createBooking'];
  dataSource = new MatTableDataSource<Flight>;
  passportNumber: string = '';

  @ViewChild(MatSort, {static: false}) sort = new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;


  constructor(private flightService: FlightService, public bookingDialog: MatDialog) {}

  ngOnInit() {
    this.getFlights();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getFlights(): void {
    this.flightService.getFlights()
      .subscribe((flights) => {
        this.dataSource.data = flights;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }

  openBookingDialog(): void {
    const dialogRef = this.bookingDialog.open(FlightCreateBookingDialogComponent, {
      data: {passportNumber: this.passportNumber},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.passportNumber = result;
    })
  }
}
