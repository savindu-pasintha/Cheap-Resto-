import React,{useState} from 'react';
import styles from "../styles/Reservations.module.scss";
import restaurant from "../assets/restaurant.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Reservations = () => {
  const [obj,setObj]=useState({name:'',date:'',time:''});
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* LEFT CONTAINER */}
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>Reservation</h1>
              <h2>Make a Romantic Atmosphere Here</h2>
            </div>
            <p>
             
            </p>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className={styles.rightContainer}>
          <div className={styles.formContainer}>
            <form action="">
              <div className={styles.imgContainer}>
                <img src={restaurant} alt="restaurant" />
              </div>
              <div className={styles.formInner}>
                <input  onChange={(e)=>{setObj({...obj,name : e.target.value});}} type="name" className={styles.name} placeholder="Name" />
                <div className={styles.dateTime}>
                  <input onChange={(e)=>{setObj({...obj,date : e.target.value});}} type="date" className={styles.date} />
                  <input  onChange={(e)=>{setObj({...obj,time : e.target.value});}}type="time" className={styles.time} />
                </div>
                <Link to={`/reservation?name=${obj.name}&&date=${obj.date}&&time=${obj.time}`} >
                  <button>
                    <span>Book Now</span>
                    <BsArrowRight />
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Reservations;
