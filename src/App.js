import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Router,
  Routes,
} from "react-router-dom";
import "./styles/App.scss";
import Home from "./components/Home";
import Logos from "./components/Logos";
import Specialities from "./components/Specialities";
import AboutUs from "./components/AboutUs";
import Facts from "./components/Facts";
import Special from "./components/Special";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";
import Aisearch from './components/Aisearch';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import { useSelector, useDispatch } from 'react-redux';
import { enableNavigationNamesAction } from './ReduxToolit/Reducer_Actions';

function App() {
  const storeObj = useSelector((state) => state.storeReducer.value);
  const dst = useDispatch();
  const setPaths = () => {
    try {
      var u = localStorage.getItem("u");
      var p = localStorage.getItem("p");
      const isValid = (val) => {
        if (val == null || val == undefined || val == "") {
          return false;
        } else {
          return true;
        }
      }
      if (!isValid(u) && !isValid(p)) {
        dst(enableNavigationNamesAction(
          {
            signin: "Sign in",
            signup: "Sign up", home: "Home",
            about: "About", search: "Search",
            more: "More"
          }
        ));
      } else {
        dst(enableNavigationNamesAction(
          {
            signin: "",
            signup: "", home: "",
            about: "", search: "",
            more: ""
          }
        ));
      }
    } catch (err) {
      throw err;
    }

  }
  useEffect(() => {
    setPaths();
  }, []);
  const LoadHome = () => {
    return (
      <>
        <Home />
        <Logos />
        <Specialities />
        <AboutUs />
        <Facts />
        <Special />
        <Reservations />
        <Footer />
      </>
    );
  }
  const Signup = () => {
    localStorage.setItem("u", "");
    localStorage.setItem("p", "");
    return (<Login type="Sign up" />)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoadHome />} />
          <Route exact path="/home" element={<LoadHome />} />
          <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/reservation" element={<><Navbar /><Aisearch /><Footer /></>} />
          <Route path="/signin" element={<><Navbar /><Login /><Footer /></>} />
          <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
          <Route path="*" element={<><Navbar /><Login /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
