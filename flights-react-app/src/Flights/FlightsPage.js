import '../css/flights.css'
import FlightComponent from "./FlightComponent";
import {useEffect, useState} from "react";
import { getAllFlights } from "../Services/flight";

export default function FlightsPage() {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        getAllFlights()
            .then(flights => {
                    setFlights(flights);
                })
    })

    const flightObject = (flight, index) => {
        return <FlightComponent flight={flight} key={index} />
    }

    const flightList = flights.map((user, index) => flightObject(user, index))

    return (
        <div className="content-container">
            {flightList}
        </div>
    );
}