export interface Flight {
  id: number;
  flightNumber: number;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  seatsAvailable: number;
  seatCost: number

}
