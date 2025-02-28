import styles from "./recentArticle.module.css";

function RecentArticle({ articles }) {
  return (
    <div className={styles.recentArticle}>
      {articles.map((item) => {
        return (
          <div className={styles.content} key={item.headline}>
            <p>{item.story.slice(0, 170)}...</p>
            <p>{item.category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RecentArticle;
