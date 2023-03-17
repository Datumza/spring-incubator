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
import {Booking} from "../models/booking";
import {CreateBooking} from "../models/create-booking";

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  customerUrl = 'http://localhost:8203/bookings'

  constructor(private http: HttpClient) {}


  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.customerUrl);
  }

  createBooking(bookingToCreate: CreateBooking): Observable<Booking> {
    return this.http.post<Booking>(this.customerUrl, bookingToCreate);
  }
}
