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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login(props) {
    const [values, setValues] = useState({ email: "", password: "", cpassword: "", type: props.type ? props.type : "Sign in" });
    const changeType = () => { setValues({ ...values, type: values.type == "Sign in" ? "Sign up" : "Sign in" }); }
    const clickLogin = async () => {
        const isValid = (val) => {
            if (val == null || val == undefined || val == "") {
                return false;
            } else {
                return true;
            }
        }

        if (values.type == "Sign in") {
            localStorage.setItem("paths", "notEnabled");
            if (isValid(values.email) && isValid(values.password)) {
                try {
                    var u = localStorage.getItem("u");
                    var p = localStorage.getItem("p");
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");//json/application text/plain
                    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:5000");
                    //var data = JSON.stringify({ "email": "savindu@gmail.com", "password": "123" });
                    var data = JSON.stringify({ "email": values.email, "password": values.password });
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: data,
                        redirect: 'follow'
                    };
                    await fetch("http://localhost:5000/api/cheapresto/signin", requestOptions)
                        .then(response => response.json())
                        .then((result) => {
                            if (result?.status == true) {
                                localStorage.setItem("paths", "enabled");
                                localStorage.setItem("signin", "Sign out");
                                localStorage.setItem("paths", "enabled");
                                toast.success('Successfull Sign in.', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                //alert("Successfull Login");
                                setTimeout(() => {
                                    window.location.href = "/home";
                                }, 4000);

                                //Link.to = "/home";
                            } else {
                                localStorage.setItem("paths", "");
                                localStorage.setItem("signin", "Sign in");
                                //alert("Unsuccessfull Login");
                                toast('Unsuccessfull Sign in', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
                        })
                        .catch(error => console.log('error', error));

                } catch (err) {
                    throw err;
                }
            } else {
                toast.error('Please enter valid username and password for  Sign in.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //alert("Please enter valid username and password for  Login.");
            }
        } else {
            localStorage.setItem("paths", "notEnabled");
            if (isValid(values.email) && isValid(values.password) && isValid(values.cpassword) && (values.password == values.cpassword)) {
                try {
                    localStorage.setItem("u", values.email);
                    localStorage.setItem("p", values.password);
                    var u = localStorage.getItem("u");
                    var p = localStorage.getItem("p");
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");//json/application text/plain
                    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:5000");
                    //var data = JSON.stringify({ "email": "savindu@gmail.com", "password": "123" });
                    var data = JSON.stringify({ "email": values.email, "password": values.password });
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: data,
                        redirect: 'follow'
                    };
                    await fetch("http://localhost:5000/api/cheapresto/signup", requestOptions)
                        .then(response => response.json())
                        .then((result) => {
                            if (u == values.email && p == values.password && result?.status == true) {
                                // alert("Successfull Sign-Up.");
                                toast.success('Successfull Sign-Up', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                setTimeout(() => {
                                    window.location.href = "/signin"
                                }, 4000);

                            } else {
                                //alert("Unsuccessfull Sign-Up.");
                                toast.warn('Unsuccessfull Sign-Up.', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                localStorage.setItem("u", "");
                                localStorage.setItem("p", "");
                                localStorage.setItem("paths", "");
                            }
                        })
                        .catch(error => console.log('error', error));


                } catch (err) {
                    throw err
                }
            } else {
                toast.error('Please enter valid valid username and password for Sign-up.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //alert("Please enter valid valid username and password for Sign-up.");
            }
        }
    }
    return (
        <div className='login'>
            <ToastContainer />
            <div className='form'>
                <div className='div'>
                    <button
                        id='frogotbtn'
                        onClick={() => { changeType(); }}>{values.type == "Sign in" ? "Frogot your password, so go to Signup ? " : "If you already Signup, go to Sign in"}</button>
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
                    <label > Password  </label>
                  
                    <br />
                    <input className='input' type="password" placeholder="xxxxxxxx"
                        value={values.password} onChange={(e) => { setValues({ ...values, password: e.target.value }); }} />
                </div>
                <br />
                {
                    (values.type == "Sign up") ?
                        (
                            <div className='div'>
                                <label> Comfirm password</label>
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
