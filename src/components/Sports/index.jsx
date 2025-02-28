import SportNews from "../SportNews";
import styles from "./sports.module.css";

function Sports({ articles }) {
  return (
    <div className={styles.sports}>
      <SportNews articles={articles} />
    </div>
  );
}

export default Sports;
