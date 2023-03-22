import '../css/flights.css'
import airplane from '../assets/airplane-icon.png'
import flying from '../assets/airplane-location-destination.png'

export default function FlightComponent({flight}) {
    const formatDate = (date) => {
        let newDate = date.split("T").join(" ")
        return newDate.substring(0, newDate.length -3)
    }

    return (
        <div className="flight-item">
            <figure>
                <img id="flight-logo" src={airplane} alt="airplane icon"/>
            </figure>

            <div>
                <h1> {flight.origin} to {flight.destination} </h1>
                <h2> {flight.flightNumber} </h2>
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
                <h1> R {flight.seatCost} </h1>
                <h2> {flight.seatsAvailable} seats left </h2>
            </div>

            <button> Book Now </button>
        </div>
    );
}