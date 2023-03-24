import '../css/authentication.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {getCustomerByPassportNumber} from "../Services/customer";
import {useNavigate} from "react-router";
import {saveToStorage} from "./StorageHandler";

export default function LoginPage({setUser}) {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({})
    const [customer, setCustomer] = useState({})
    const [email, setEmail] = useState()
    const [passportNumber, setPassportNumber] = useState()

    function handleLogin(event) {
        event.preventDefault();

        credentials.searchType = "PASSPORT_SEARCH"
        credentials.passport = passportNumber

        getCustomerByPassportNumber(credentials)
            .then(response => {
                if (response.passportNumber !== undefined && response.passportNumber === credentials.passport) {
                    saveToStorage('user', response);
                    setUser(response);
                    navigate('/');
                }
            })
    }

    return (
        <div className="login-page-container">
            <section className="left-container"></section>
            <section className="right-container">
                <div className="right-content-container">
                    <h1> Welcome to Molo Air </h1>
                    <p> Sign in to explore amazing deals and seamless travel experiences. Let's take you places.</p>

                    <form onSubmit={handleLogin}>
                        <label> Email </label>
                        <input type="text" name="email" id={email} required onChange={(e) => setEmail(e.target.value)}/>

                        <label> Passport Number </label>
                        <input type="text" name="passport-number" id={passportNumber} required
                               onChange={(e) => setPassportNumber(e.target.value)}/>

                        <div>
                            <input type="checkbox"/>
                            <label> Remember me </label>

                            <Link id="forgot-password-link" to="/register"> Forgot password? </Link>
                        </div>

                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </section>
        </div>
    );
}