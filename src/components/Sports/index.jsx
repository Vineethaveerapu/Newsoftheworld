import SportNews from "../SportNews";
import styles from "./sports.module.css";

function Sports({ articles, setSelectedArticle }) {
  return (
    <div className={styles.sports}>
      <SportNews articles={articles} setSelectedArticle={setSelectedArticle} />
    </div>
  );
}

export default Sports;
