import styles from "../styles/AboutUs.module.scss";
import bg1 from "../assets/bg1.jpg";
import restaurant from "../assets/restaurant.jpg";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src={bg1} alt="bg1" />
      </div>
      <div className={styles.restaurant}>
        <img src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>We always Server You Better</h3>
          <p >
            Cheap-Resto is here to help you find online menus from your
            favorite restaurants nationwide. You can search for restaurants and
            see their menus, prices, hours, locations, and more.
            <br />
            With 50,000+ restaurant menus in 1,000+ cities,
            Cheap-Resto makes it easy to find exactly what you’re
            hungry for. You can even order online for delivery or
            takeout for delicious, hassle-free dining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
