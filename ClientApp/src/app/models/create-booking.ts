export class CreateBooking{
  customerId: number;
  flightId: number;

  constructor(customerId: number, flightId: number) {
    this.customerId = customerId;
    this.flightId = flightId;
  }
}
