import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateFlight } from "../models/create-flight";
import {Flight} from "../models/flight";
import {FlightDaysToDepartureSearch} from "../models/flight-days-to-departure-search";
import {FlightDestinationSearch} from "../models/flight-destination-search";
import {FlightOriginSearch} from "../models/flight-origin-search";
import {FlightFlightNumberSearch} from "../models/flight-flight-number-search";
import {Customer} from "../models/customer";
import {CreateCustomer} from "../models/create-customer";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  customerUrl = 'http://localhost:8201/customers'

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  createCustomer(customerToCreate: any){
    return this.http.post(this.customerUrl, customerToCreate);
  }
}
