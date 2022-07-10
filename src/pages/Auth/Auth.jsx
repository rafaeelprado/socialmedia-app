import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.svg";

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" width="4rem" />
                <div className="Webname">
                    <h1>Geminis</h1>
                    <h6>Share your best moments with the world</h6>
                </div>
            </div>

            <LogIn />
        </div>
    );
};
function LogIn() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="infoInput"
                        name="username"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <span style={{ fontSize: "12px" }}>
                        Forgot password?
                    </span>
                <div style={{ borderTop: "2px solid #ededed ", marginLeft: 20, marginRight: 20 }}></div>
                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account? <b>Sign up</b>
                    </span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
    );
}
function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign up</h3>

                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="infoInput"
                        name="firstname"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usernames"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirm Password"
                    />
                </div>

                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Auth;