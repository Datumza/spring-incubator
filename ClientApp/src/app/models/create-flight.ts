export class CreateFlight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  seatsAvailable: number;
  seatCost: number


  constructor() {
    this.flightNumber = "";
    this.origin = "";
    this.destination = "";
    this.departureTime = new Date();
    this.arrivalTime = new Date();
    this.seatsAvailable = 0;
    this.seatCost = 0;
  }
}
