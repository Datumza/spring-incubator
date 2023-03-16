import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {CustomersComponent} from "./customers/customers.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {CreateFlightComponent} from "./create-flight/create-flight.component";

const routes: Routes = [
  { path: '', component: FlightsComponent},
  { path: 'flights', component: FlightsComponent},
  { path: 'create-flight', component: CreateFlightComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'create-customer', component: CustomersComponent},
  { path: 'bookings', component: BookingsComponent},
  { path: 'create-booking', component: BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
