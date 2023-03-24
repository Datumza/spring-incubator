import '../css/flights.css'
import airplane from '../assets/airplane-icon.png'
import flying from '../assets/airplane-location-destination.png'
import * as React from "react";
import BookingConfirmationDialog from "./BookingConfirmationDialog";
import BookingConfirmedDialog from "./BookingConfirmedDialog";
import {bookFlight} from "../Services/flight";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {formatDate, formatPrice} from "../Functions/format";
import {getFromStorage} from "../Authentication/StorageHandler";

export default function FlightComponent({flight}) {
    const [open, setOpen] = React.useState(false);
    const [openConfirmed, setOpenConfirmed] = React.useState(false);

    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [navigate, isLoggedIn]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBook = () => {
        const userId = getFromStorage('user').id
        const flightId = flight.id

        const booking = {
            flightId: flightId,
            customerId: userId
        }

        bookFlight(booking);

        setOpen(false);
        setOpenConfirmed(true);
    };

    const handleCloseConfirmed = () => {
        setOpenConfirmed(false);
    };

    return (
        <div className="flight-item">
            <figure>
                <img id="flight-logo" src={airplane} alt="airplane icon"/>
            </figure>

            <div>
                <h1> {flight.origin} to {flight.destination} </h1>
                <h2> {flight.flightNumber.toUpperCase()} </h2>
            </div>

            <div>
                <h1> Departure Time </h1>
                <h2> {formatDate(flight.departureTime)} </h2>
            </div>

            <figure>
                <img id="flight-logo" src={flying} alt="flying airplane icon"/>
            </figure>

            <div>
                <h1> Arrival Time </h1>
                <h2> {formatDate(flight.arrivalTime)} </h2>
            </div>


            <div>
                <h1> R {formatPrice(flight.seatCost)} </h1>
                <h2> {flight.seatsAvailable} seats left </h2>
            </div>

            <button onClick={handleClickOpen}> Book Now</button>
            <BookingConfirmationDialog flight={flight} open={open} handleClose={handleClose} book={handleBook}/>
            <BookingConfirmedDialog flight={flight} open={openConfirmed} handleClose={handleCloseConfirmed}/>
        </div>
    );
}