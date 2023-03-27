import * as React from "react";
import {formatDate} from "../Functions/format";

export default function BookingsComponent({booking, flight}) {



    return (
        <div className="booking-item">
            <h1> {flight.origin} to {flight.destination} </h1>


            <div>
                <h1> Departure Time </h1>
                <h2> {formatDate(flight.departureTime)} </h2>
            </div>

            <div>
                <h1> Arrival Time </h1>
                <h2> {formatDate(flight.arrivalTime)} </h2>
            </div>

            <h3> {formatDate(flight.departureTime)} </h3>
        </div>
    );
}