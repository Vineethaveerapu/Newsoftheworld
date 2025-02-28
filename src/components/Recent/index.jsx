import styles from "./recent.module.css";
import RecentArticle from "../RecentArticle";

function Recent({ className }) {
  return (
    <section className={`${styles.recent} ${className}`}>
      <div className={`${styles.recentTitle}`}>Recent News</div>
      <RecentArticle />
    </section>
  );
}

export default Recent;
