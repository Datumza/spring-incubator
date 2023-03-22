import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginPage from "./Authentication/LoginPage";
import RegisterPage from "./Authentication/RegisterPage";
import FlightsPage from "./Flights/FlightsPage";
import {Navbar} from "react-bootstrap";
import HomePage from "./Home/HomePage";
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={< HomePage />}></Route>
            <Route exact path='/login' element={< LoginPage />}></Route>
            <Route exact path='/register' element={< RegisterPage />}></Route>
            <Route exact path='/flights' element={< FlightsPage />}></Route>
            <Route exact path='/bookings' element={< RegisterPage />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
