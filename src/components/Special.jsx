import React, { useState } from 'react';
import styles from "../styles/Special.module.scss";


const Dishe = ({ name, price, description }) => {

  return (
    <div className={styles.disheContainer}>
      <div className={styles.dishe}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

const Special = () => {
  const [arr, setArr] = useState([
    " Bakeries near meBars near me",
    "Beer Gardens near me",
    "Beverage Shops near me",
    "Cafés near me",
    'Casual Dining near me',
    "Clubs near me",
    "Dessert Parlors near me",
    "Fine Dining near me",
    "Food Courts near me",
    "Food Trucks near me",
    "Juice Bar near me",
    "Kiosks near me",
    "Lounges near me",
    "Pubs near me",
    "Quick Bites near me",
    "Sweet Shops near me"
  ]);

  const Searches = () => {
    return (
      <>
        <div className={styles.title}>
          <h1>Popular restaurant types near me</h1>
          <h2></h2>
        </div>
        {
          arr.map((item) =>
          (<div className={styles.dishes}>
            <div className={styles.col1}>
              <Dishe
                name=""
                price=""
                description={item}
              />

            </div>
            <div className={styles.col1}>
              <Dishe
                name=""
                price=""
                description={item}
              />
            </div>
          </div>)
          )
        }
      </>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Special Dieshes</h1>
        <h2>Best Recommendation Menu</h2>
      </div>
      <div className={styles.dishes}>
        <div className={styles.col1}>
          <Dishe
            name="Beef Burger"
            price="$ 32"
            description="Classic greek salad, barrel aged feta cheese"
          />

        </div>
        <div className={styles.col1}>
          <Dishe
            name="Pork Burger"
            price="$ 32"
            description="Classic greek salad, barrel aged feta cheese"
          />

        </div>
      </div>
      <Searches />
    </div>
  );
};

export default Special;
