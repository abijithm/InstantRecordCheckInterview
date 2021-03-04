import React from 'react';
import logo from "../admin-logo.png"

// import '../scss/stylesheets/main.scss';
// import "../scss/main.scss"
// import '../scss/stylesh_eets/login_continue';
// import '../scss/stylesheets/login_email';
// import '../scss/stylesheets/login_password';

export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);

    function alert_prompt(){
        alert("Email: "+email+", "+"PW: "+password+ "Remember: "+rememberMe)
    }

    return (
        <div>
            <div className={"container-fluid h-100"}>
                <div className={"login-container h-100 d-flex align-items-center justify-content-center"}>
                    <div className="login-form">
                        <div className={"page-header mb-4"} id="banner">
                            <div className="text-center">
                                <a href="#"><img src={logo}></img></a>
                            </div>
                        </div>
                        <div className="main-div">
                            <div className="panel mb-4">
                                <h2 className="text-center">Sign in to your account</h2>
                            </div>
                            <form id="Login">
                                <div class="form-group mb-3">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="login_email" 
                                        className="form-control" 
                                        id="login_email"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }}
                                    >
                                    </input>
                                </div>
                                <div class="form-group mb-3">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        name="login_password"
                                        className="form-control" 
                                        id="login_password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value)
                                        }}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-3">
                                    <div class="custom-control custom-checkbox">
                                        <label for="remember_me"  className="custom-control-label" > Remember me</label>
                                        <input 
                                            id="remember_me" 
                                            className="custom-control-input"  
                                            name="remember_me" 
                                            type="checkbox"
                                            value={rememberMe}
                                            onChange={(event) => {
                                                setRememberMe(event.target.value)
                                            }}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <button
                                    onClick={alert_prompt}
                                    
                                            type="submit" name="login_continue"  id="login_continue" className="btn btn-primary">Continue</button>
                                </div>
                                <div className="forgot">
                                    <a href="">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-center text-md-left">
                        <div className="col-xs-12 col-md-12 text-center">
                            <ul className="list-unstyled quick-links ml-auto">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}