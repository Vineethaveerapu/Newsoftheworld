import styles from "./breakingnews.module.css";
import Headlines from "../Headlines";

function BreakingNews() {
  return (
    <div className={styles.breakingNews}>
      <div className={styles.breakingNewsTitle}>Breaking News</div>
      <Headlines />
    </div>
  );
}

export default BreakingNews;
