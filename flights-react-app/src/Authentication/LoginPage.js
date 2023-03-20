import '../css/authentication.css'
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="login-page-container">
            <section className="left-container"></section>
            <section className="right-container">
                <div className="right-content-container">
                    <h1> Welcome to Molo Air </h1>
                    <p> Sign in to explore amazing deals and seamless travel experiences. Let's take you places.</p>

                    <form>
                        <label> Email </label>
                        <input type="text" name="email"/>

                        <label> Passport Number </label>
                        <input type="text" name="passport-number"/>

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