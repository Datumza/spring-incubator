import '../css/flights.css'
import FlightComponent from "./FlightComponent";
import {useEffect, useState} from "react";
import { getAllFlights } from "../Services/flight";
import {getFromStorage} from "../Authentication/StorageHandler";
import {useNavigate} from "react-router";
import isLoggedIn from "../Authentication/UserStateHandler";

export default function FlightsPage() {

    const navigate = useNavigate()
    const [flights, setFlights] = useState([])

    useEffect(() => {
        if (!isLoggedIn()){
            navigate('/login')
        }

        getAllFlights()
            .then(flights => {
                    setFlights(flights);
                })
    }, [])

    const flightObject = (flight, index) => {
        return <FlightComponent flight={flight} key={index} />
    }

    const flightList = flights.map((data, index) => flightObject(data, index))

    return (
        <div className="content-container">
            {flightList}
        </div>
    );
}