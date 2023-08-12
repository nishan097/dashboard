import React from "react";
import "./login.css";




const Login = () => {
    return (


        <>
            <div className="form">
                <div className="subform">
                    <form action="">
                        <div>
                            <img src="./images/logo.png" alt="" className="image" />
                            <div className="content">
                                <p>
                                    e-Palika Nagarjun
                                </p>
                            </div>
                        </div>

                        <div>

                            <label htmlFor="email">प्रयोगकर्ता</label>
                            <input type="text" name="email" id="email" autoComplete="off" placeholder="प्रयोगकर्ता " className="email" />

                        </div>
                        <div>
                            <div className="input">
                                <label htmlFor="password">पासवर्ड</label>
                                <input type="password" name="password" id="password" placeholder="पासवर्ड" className="pass" />
                            </div>
                        </div>
                        <div className="submit">
                            <button type="submit">लग इन</button>
                        </div>
                    </form>
                </div>
            </div>


        </>

    )
};

export default Login;