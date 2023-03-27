import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import LoginPage from "./Authentication/LoginPage";
import RegisterPage from "./Authentication/RegisterPage";
import FlightsPage from "./Flights/FlightsPage";
import TopNavbar from "./Navigation/TopNavbar.js";
import {useState} from "react";
import {getFromStorage} from "./Authentication/StorageHandler";
import BookingsPage from "./Bookings/BookingsPage";

function App() {
    const [user, setUser] = useState(getFromStorage('user'));

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        element={(
                            <>
                                <TopNavbar user={user}/>
                                <Outlet/>
                            </>
                        )}
                    >
                        <Route exact path='/' element={< FlightsPage/>}></Route>
                        <Route exact path='/flights' element={< FlightsPage/>}></Route>
                        <Route exact path='/bookings' element={< BookingsPage/>}></Route>
                    </Route>

                    <Route exact path='/login' element={< LoginPage setUser={setUser}/>}></Route>
                    <Route exact path='/register' element={< RegisterPage setUser={setUser}/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
