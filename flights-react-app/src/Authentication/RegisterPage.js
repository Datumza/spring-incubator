import { useState } from "react";
import '../css/authentication.css'
import {createCustomer} from "../Services/customer";
import {useNavigate} from "react-router";

export default function RegisterPage() {
    const navigate = useNavigate();
    const  [customer, setCustomer] = useState({})
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [passportNumber, setPassportNumber] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const formIsValid = () => {
        return true
    }

    function handleRegister(event) {
        event.preventDefault();

        customer.firstName = firstName
        customer.lastName = lastName
        customer.username = username
        customer.email = email
        customer.passportNumber = passportNumber
        customer.phoneNumber = phoneNumber

        createCustomer(customer)
            .then(response => {
                console.log(response);
                navigate('/')
            })
    }

    return (
        <div className="login-page-container">
            <section className="left-container"></section>
            <section className="right-container">
                <div className="right-content-container">
                    <h1> Welcome to Molo Air </h1>
                    <p> Sign up and explore amazing deals and seamless travel experiences. Let's take you places.</p>

                    <form onSubmit={handleRegister}>
                        <label> First Name </label>
                        <input type="text" name="first-name" id={firstName} required onChange={(e) => setFirstName(e.target.value)}/>

                        <label> Last Name </label>
                        <input type="text" name="last-name" id={lastName} required onChange={(e) => setLastName(e.target.value)}/>

                        <label> Username </label>
                        <input type="text" name="username" id={username} required onChange={(e) => setUsername(e.target.value)}/>

                        <label> Email </label>
                        <input type="text" name="email" id={email} required onChange={(e) => setEmail(e.target.value)}/>

                        <label> Passport Number </label>
                        <input type="text" name="passport-number" id={passportNumber} required onChange={(e) => setPassportNumber(e.target.value)}/>

                        <label> Phone Number </label>
                        <input type="text" name="phone-number" id={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}/>

                        <input type="submit" value="Create Profile"/>
                    </form>
                </div>
            </section>
        </div>
    );
}