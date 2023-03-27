import BookingsComponent from "./BookingsComponent";
import {useEffect, useState} from "react";
import {getBookings, getBookingsByCustomerId, getFlightById} from "../Services/flight";
import {getFromStorage} from "../Authentication/StorageHandler";
import {useNavigate} from "react-router";
import isLoggedIn from "../Authentication/UserStateHandler";

export default function BookingsPage() {

    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        if (!isLoggedIn()){
            navigate('/login')
        }

        else {
            getBookingsByCustomerId(getFromStorage('user').id)
                .then(bookings => {
                    setBookings(bookings);
                })
        }
    }, [navigate])

    const bookingObject = (booking, index) => {
        const flight = getFlightById(booking.flightId)
        return <BookingsComponent booking={booking} flight={flight} key={index} />
    }

    const bookingList = bookings.map((data, index) => bookingObject(data, index))

    return (
        <div className="content-container">
            {bookingList}
        </div>
    );
}