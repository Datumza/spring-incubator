import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Customer} from "../models/customer";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  dataSource = new MatTableDataSource<Customer>;
  displayedColumns = ['username', 'email', 'createBooking'];

  @ViewChild(MatSort, {static: false}) sort = new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe((customers) => {
        this.dataSource.data = customers;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }
}
