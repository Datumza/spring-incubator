import '../css/flights.css'
import airplane from '../assets/airplane-icon.png'
import flying from '../assets/airplane-location-destination.png'

export default function FlightComponent() {
    return (
        <div className="flight-item">
            <figure>
                <img id="flight-logo" src={airplane} alt="airplane icon"/>
            </figure>

            <div>
                <h1> Flight City </h1>
                <h2> Flight Number </h2>
            </div>

            <div>
                <h1> Departure Time </h1>
                <h2> 12:00 </h2>
            </div>

            <figure>
                <img id="flight-logo" src={flying} alt="flying airplane icon"/>
            </figure>

            <div>
                <h1> Arrival Time </h1>
                <h2> 14:00 </h2>
            </div>


            <div>
                <h1> R 300.00 </h1>
                <h2> 76 seats left </h2>
            </div>

            <button> Book Now </button>
        </div>
    );
}