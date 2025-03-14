import styles from "./recent.module.css";
import RecentArticle from "../RecentArticle";

function Recent({ articles, setSelectedArticle }) {
  return (
    <section className={`${styles.recent}`}>
      <div className={`${styles.recentTitle}`}>Recent News</div>
      <RecentArticle
        articles={articles}
        setSelectedArticle={setSelectedArticle}
      />
    </section>
  );
}

export default Recent;
