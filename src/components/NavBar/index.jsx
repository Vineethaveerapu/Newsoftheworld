import NavLink from "../NavLink";
import DateText from "../DateText";
import styles from "./navBar.module.css";
function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.mobileMenu}>icon</div>
      <NavLink />
      <DateText />
    </div>
  );
}

export default NavBar;
