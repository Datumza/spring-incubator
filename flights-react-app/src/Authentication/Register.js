export default function Register() {
    return (
        <div className="right-content-container">
            <h1> Welcome to Molo Air </h1>
            <p> Sign up and explore amazing deals and seamless travel experiences. Let's take you places.</p>

            <form>
                <label> First Name </label>
                <input type="text" name="first-name"/>
                
                <label> Last Name </label>
                <input type="text" name="last-name"/>
                
                <label> Username </label>
                <input type="text" name="username"/>
                
                <label> Email </label>
                <input type="text" name="email"/>

                <label> Passport Number </label>
                <input type="text" name="passport-number"/>

                <label> Phone Number </label>
                <input type="text" name="phone-number"/>
                
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}