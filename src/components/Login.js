import React, { useState, useEffect } from 'react'
import '../styles/login.scss';
import {
    BrowserRouter,
    Route,
    Link,
    NavLink,
    Router,
    Routes,
} from "react-router-dom";

export default function Login(props) {
    const [values, setValues] = useState({ email: "", password: "", cpassword: "", type: props.type ? props.type : "Login" });
    const changeType = () => {
        setValues({ ...values, type: values.type == "Login" ? "Sign up" : "Login" });
    }
    const clickLogin = () => {
        const isValid = (val) => {
            if (val == null || val == undefined || val == "") {
                return false;
            } else {
                return true;
            }
        }

        if (values.type == "Login") {
            if (isValid(values.email) && isValid(values.password)) {
                try {
                    var u = localStorage.getItem("u");
                    var p = localStorage.getItem("p");
                    if (u == values.email && p == values.password) {
                        localStorage.setItem("paths", "enabled");
                        localStorage.setItem("signin", "Sign out");
                        alert("Successfull Login");
                        window.location.href = "/home"
                        //Link.to = "/home";
                    } else {
                        localStorage.setItem("paths", "");
                        localStorage.setItem("signin", "Sign in");
                        alert("Unsuccessfull Login");
                    }
                } catch (err) {
                    throw err;
                }
            } else {
                alert("Please enter valid username and password for  Login.");
            }
        } else {
            if (isValid(values.email) && isValid(values.password) && isValid(values.cpassword) && (values.password == values.cpassword)) {
                try {
                    localStorage.setItem("u", values.email);
                    localStorage.setItem("p", values.password);
                    var u = localStorage.getItem("u");
                    var p = localStorage.getItem("p");
                    if (u == values.email && p == values.password) {
                        alert("Successfull Sign-Up.");
                        window.location.href = "/signin"
                    } else {
                        alert("Unsuccessfull Sign-Up.");
                        localStorage.setItem("u", "");
                        localStorage.setItem("p", "");
                        localStorage.setItem("paths", "");
                    }
                } catch (err) {
                    throw err
                }
            } else {
                alert("Please enter valid valid username and password for Sign-up.");
            }
        }
    }
    return (
        <div className='login'>
            <div className='form'>
                <div className='div'>
                    <button
                        id='frogotbtn'
                        onClick={() => { changeType(); }}>{values.type == "Login" ? "Frogot your password, so go to Signup ? " : "If you already Signup, go to Login"}</button>
                </div>
                <div className='div'>
                    <h className="h">{values.type} with 'Cheap-Resto'</h>
                </div>
                <br />
                <div className='div'>
                    <label>Email</label>
                    <br />
                    <input className='input' type="text" placeholder="savindu@gmail.com"
                        value={values.email} onChange={(e) => { setValues({ ...values, email: e.target.value }); }} />
                </div>
                <br />
                <div className='div'>
                    <label>Password</label>
                    <br />
                    <input className='input' type="password" placeholder="xxxxxxxx"
                        value={values.password} onChange={(e) => { setValues({ ...values, password: e.target.value }); }} />
                </div>
                <br />
                {
                    (values.type == "Sign up") ?
                        (
                            <div className='div'>
                                <label>Comfirm password</label>
                                <br />
                                <input className='input' type="password" placeholder="xxxxxxxx"
                                    value={values.cpassword} onChange={(e) => { setValues({ ...values, cpassword: e.target.value }); }} />
                            </div>
                        ) :
                        ""
                }
                <br />

                <div className='clickbtn'>
                    <button onClick={(e) => { clickLogin(); }}>{values.type}</button>
                </div>
                <br />

            </div>
        </div>
    )
}
