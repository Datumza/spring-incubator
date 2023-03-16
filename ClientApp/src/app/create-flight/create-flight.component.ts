import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FlightService} from "../services/flight.service";
import { CreateFlight } from "../models/create-flight";

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})

export class CreateFlightComponent {
  createFlightFormGroup: FormGroup;
  flightNumberFormControl: FormControl;
  originFormControl: FormControl;
  destinationFormControl :FormControl;
  departureTimeFormControl :FormControl;
  arrivalTimeFormControl :FormControl;
  seatsAvailableFormControl: FormControl;
  seatCostFormControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private flightsService: FlightService
  ) {
    this.flightNumberFormControl = new FormControl('', [
      Validators.required
    ]);

    this.originFormControl = new FormControl('', [
      Validators.required
    ]);

    this.destinationFormControl = new FormControl('', [
      Validators.required
    ]);

    this.departureTimeFormControl = new FormControl('', [
      Validators.required
    ]);

    this.arrivalTimeFormControl = new FormControl('', [
      Validators.required
    ]);

    this.seatsAvailableFormControl = new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]);

    this.seatCostFormControl = new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]);

    this.createFlightFormGroup = formBuilder.group({
      flightNumber: this.flightNumberFormControl,
      origin: this.originFormControl,
      destination: this.destinationFormControl,
      departureTime: this.departureTimeFormControl,
      arrivalTime: this.arrivalTimeFormControl,
      seatsAvailable: this.seatsAvailableFormControl,
      seatCost: this.seatCostFormControl
    });
  }

  createFlight(): void {
    let flight: CreateFlight = new CreateFlight();
    flight.flightNumber = this.createFlightFormGroup.value.flightNumber;
    flight.origin = this.createFlightFormGroup.value.origin;
    flight.destination = this.createFlightFormGroup.value.destination;
    flight.departureTime = this.createFlightFormGroup.value.departureTime;
    flight.arrivalTime = this.createFlightFormGroup.value.arrivalTime;
    flight.seatsAvailable = this.createFlightFormGroup.value.seatsAvailable;
    flight.seatCost = this.createFlightFormGroup.value.seatCost;

    this.flightsService.createFlight(flight);
  }
}
