import {Component, ViewChild} from '@angular/core';
import {Flight} from "../models/flight";
import {FlightService} from "../services/flight.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  displayedColumns: string[] = ['flightNumber', 'origin', 'destination', 'departureTime', 'arrivalTime', 'seatsAvailable', 'seatCost', 'createBooking'];
  dataSource = new MatTableDataSource<Flight>;

  @ViewChild(MatSort, {static: false}) sort = new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;


  constructor(private flightService: FlightService) {}

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
}
