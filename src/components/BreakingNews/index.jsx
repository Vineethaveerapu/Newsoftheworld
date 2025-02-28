import styles from "./breakingNews.module.css";
import Headlines from "../Headlines";

function BreakingNews({ articles }) {
  return (
    <div className={styles.breakingNews}>
      <div className={styles.breakingNewsTitle}>Breaking News</div>
      <Headlines articles={articles} />
    </div>
  );
}

export default BreakingNews;
