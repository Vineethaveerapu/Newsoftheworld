import SocialMedia from "../SocialMedia";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <SocialMedia />
      <h1 className={styles.h1}>News For Today</h1>
      <div>wip</div>
    </header>
  );
}

export default Header;
