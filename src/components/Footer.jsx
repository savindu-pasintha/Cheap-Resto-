import styles from "../styles/Footer.module.scss";
import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Chaep Resto
            <br />
            +9476875787</span>
          <br />
          <span className={styles.copyright}>
            © Copyright Cheap-Resto. All rights reserved.
            <br />
            savindupasingtha@gmail.com
          </span>
        </div>

        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li className={styles.socialsContainer}>
            Get in Touch
            <ul className={styles.socials}>
              <li>
                <a href="https://www.linkedin.com/in/savindu-pasintha/"> <FaFacebook /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/savindu-pasintha/">  <FaLinkedinIn /></a>
              </li>
              <li>
                <a href="https://github.com/savindu-pasintha">  <FaInstagramSquare /></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
