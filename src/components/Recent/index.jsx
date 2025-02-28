import styles from "./recent.module.css";
import RecentArticle from "../RecentArticle";

function Recent({ articles }) {
  return (
    <section className={`${styles.recent}`}>
      <div className={`${styles.recentTitle}`}>Recent News</div>
      <RecentArticle articles={articles} />
    </section>
  );
}

export default Recent;
