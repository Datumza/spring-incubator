import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateFlight } from "../models/create-flight";
import {Flight} from "../models/flight";
import {FlightDaysToDepartureSearch} from "../models/flight-days-to-departure-search";
import {FlightDestinationSearch} from "../models/flight-destination-search";
import {FlightOriginSearch} from "../models/flight-origin-search";
import {FlightFlightNumberSearch} from "../models/flight-flight-number-search";

@Injectable({
  providedIn: 'root'
})

export class FlightsService {
  flightsUrl = 'http://localhost:8202/flights'

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightsUrl);
  }

  getFlightSpecials(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.flightsUrl}/specials`);
  }

  getFlightByFlightNumber(searchBody: FlightFlightNumberSearch): Observable<Flight> {
    return this.http.post<Flight>(`${this.flightsUrl}/search`, searchBody);
  }

  getFlightByOrigin(searchBody: FlightOriginSearch): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.flightsUrl}/search`, searchBody);
  }

  getFlightByDestination(searchBody: FlightDestinationSearch): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.flightsUrl}/search`, searchBody);
  }

  getFlightByDaysToDeparture(searchBody: FlightDaysToDepartureSearch): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.flightsUrl}/search`, searchBody);
  }

  createFlight(flightToCreate: CreateFlight): Observable<Flight> {
    return this.http.post<Flight>(this.flightsUrl, flightToCreate);
  }
}
