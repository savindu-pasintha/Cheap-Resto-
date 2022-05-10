import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Router,
  Routes,
} from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
  //const paths = useSelector();
  const [navOpen, setNavOpen] = useState(false);
  const [paths, setPaths] = useState(false);
  const [sign, setSign] = useState("Sign in");
  const getPaths = () => {
    try {
      var p = localStorage.getItem("paths");
      //var s = localStorage.getItem("signin");
      //setSign(s ? s : "Sign in");
      const isValid = (val) => {
        if (val == null || val == undefined || val == "") {
          return false;
        } else {
          return true;
        }
      }
      if (isValid(p)) {
        setPaths(true);
      }
    } catch (err) {
      throw err;
    }
  }
  const signout = () => {
    localStorage.setItem("u", "");
    localStorage.setItem("p", "");
    alert("Sign out.");
    window.location.href = "/signin"
  }
  useEffect(() => {
    getPaths();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>Cheap-Resto</span>
      </div>

      <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
        <FaBars />
      </div>

      <ul
        className={`${navOpen ? styles.menuMobileActive : undefined} ${styles.menu
          }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
          <FaTimes />
        </li>

        <li> <Link to="/home" style={{ color: 'white' }}>{paths ? "Home" : ""}</Link></li>
        <li> <Link to="/menu" style={{ color: 'white' }}>{paths ? "Our Menu" : ""}</Link></li>
        <li> <Link to="/reservation" style={{ color: 'white' }}>{paths ? "Search" : ""}</Link></li>
        <li> <Link to="/signin" style={{ color: 'white' }}>{sign}</Link></li>
        <li> <Link to="/signup" style={{ color: 'white' }}>Sign up</Link></li>
        <li> <Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li> <Link to="/" style={{ color: 'white' }}>{paths ? "More" : ""}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
