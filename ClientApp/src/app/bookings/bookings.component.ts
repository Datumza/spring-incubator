import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BookingItem} from "../models/booking-item";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Booking} from "../models/booking";
import {BookingService} from "../services/booking.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  displayedColumns: string[] = ['referenceNumber', 'customerId', 'flightId'];
  dataSource = new MatTableDataSource<Booking>;

    @ViewChild(MatSort, {static: false}) sort = new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private bookingService: BookingService) {}
  ngOnIn() {
    this.getBookings();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getBookings(): void {
    this.bookingService.getBookings()
      .subscribe((bookings) => {
        this.dataSource.data = bookings;
      })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }
}
