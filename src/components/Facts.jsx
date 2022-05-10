import styles from "../styles/Facts.module.scss";

const Facts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.facts}>
          <div className={styles.card}>
            <h2>2090</h2>
            <h3>Restaurants</h3>
          </div>
          <div className={styles.card}>
            <h2>90</h2>
            <h3>Years Expirience</h3>
          </div>
          <div className={styles.card}>
            <h2>5000+</h2>
            <h3>Menu Dishes</h3>
          </div>
          <div className={styles.card}>
            <h2>2500000+</h2>
            <h3>Happy Customers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
