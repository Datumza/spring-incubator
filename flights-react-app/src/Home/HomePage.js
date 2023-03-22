import FlightsPage from "../Flights/FlightsPage";
import Navbar from "../Navigation/Navbar";

export default function HomePage() {
    return (
        <div className="page">
            <Navbar />
            <FlightsPage/>
        </div>

    );
}