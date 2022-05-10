import Navbar from "./Navbar";
import styles from "../styles/Home.module.scss";
import { BsArrowRight } from "react-icons/bs";
import eating from "../assets/eating.jpg";
import Homeimage from '../assets/homeimage.jpg'
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Router,
  Routes,
} from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      {
        true ? (
          <>
            <div className={styles.bg1}>
              <div className={styles.photo1}>
                <div className={styles.photoContainer}>
                  <img
                    src={Homeimage || "https://c7.alamy.com/comp/JB37TN/miami-beach-floridasouth-pointe-parksmith-wollenskyrestaurant-restaurants-JB37TN.jpg"}
                    alt="eating" />
                </div>
              </div>
            </div>
            <div className={styles.slogan}>
              <h1>{`Feel The Autenthic & Original Taste From Us`}</h1>
              <p>
                Order your next meal
              </p>
              <Link to="/reservation">
                <button className={styles.btn} >
                  <span>See More</span>
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </>
        ) : ""
      }
    </div>
  );
};

export default Home;
