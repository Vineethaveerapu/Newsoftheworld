import styles from "./navlink.module.css";

const Navlink = ({ title, link = "#", onClick }) => {
  return (
    <a className={styles.navlink} href={link} onClick={onClick}>
      {title}
    </a>
  );
};

export default Navlink;
