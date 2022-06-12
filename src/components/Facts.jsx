import React from 'react';
import { setIn } from "immutable";
import styles from "../styles/Facts.module.scss";

const Facts = () => {
  const [ counterState, setCounter ] = React.useState(9);
  const cnt = ()=>{
    setInterval(() => {
        setCounter(counterState+1);
   },1000);
  }
 // React.useEffect(() => {},[counterState])
  return (
    <div className={styles.container} onMouseMove={cnt}>
      <div className={styles.inner}>
        <div className={styles.facts}>
          <div className={styles.card}>
            <h2>209
{
 counterState
}

            </h2>
            <h3>Restaurants</h3>
          </div>
          <div className={styles.card}>
            <h2>9{
 counterState
}</h2>
            <h3>Years Expirience</h3>
          </div>
          <div className={styles.card}>
            <h2>518{
 counterState
}+</h2>
            <h3>Menu Dishes</h3>
          </div>
          <div className={styles.card}>
            <h2>259988{
 counterState
}+</h2>
            <h3>Happy Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
