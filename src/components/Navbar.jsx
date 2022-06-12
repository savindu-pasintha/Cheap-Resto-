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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
 
  useEffect(() => {
    getPaths();
  }, []);
  const signoutclick = async () => {
    localStorage.setItem("u", "");
    localStorage.setItem("p", "");
    localStorage.setItem("paths", "notEnabled")
    toast.success('Successfull Sign out.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => { window.location.href = '/signin'; }, 1000);

  }
  return (
    <nav className={styles.nav}>
      <ToastContainer />
      <div className={styles.logoContainer}>
        <span className={styles.logo} >Cheap-Resto</span>
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
        <li> <Link to="/ourmenu" style={{ color: 'white' }}>{paths ? "Our Menu" : ""}</Link></li>
        <li> <Link to="/reservation" style={{ color: 'white' }}>{paths ? "Search" : ""}</Link></li>
        <li> <Link to="/signin" style={{ color: 'white' }}>{sign}</Link></li>
        <li> <Link to="/signup" style={{ color: 'white' }}>Sign up</Link></li>
        <li onClick={() => { signoutclick(); }} style={{ color: 'white' }}>Sign out</li>
        <li> <Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li> <Link to="/more" style={{ color: 'white' }}>{paths ? "More" : ""}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
