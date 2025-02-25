import SocialMedia from "../SocialMedia";
import styles from "./header.module.css";
import phoneIcon from "../../assets/phone.svg";

function Header() {
  return (
    <header className={styles.header}>
      <SocialMedia />
      <h1 className={styles.h1}>News For Today</h1>
      <div className={styles.phone}>
        <img src={phoneIcon} alt="phone icon" />
        <a href="tel:+46700654321">+46 700654321</a>
      </div>
    </header>
  );
}

export default Header;
