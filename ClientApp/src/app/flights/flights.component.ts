import { Component } from '@angular/core';
import {Flight} from "../models/flight";
import {FlightService} from "../services/flight.service";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
    this.flightService.getFlights()
      .subscribe(flights => this.flights = flights);
  }
}
