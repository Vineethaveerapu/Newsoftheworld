import styles from "./recentArticle.module.css";

import { articles } from "../../data/data";

const fourArticles = articles.slice(0, 4);

function RecentArticle() {
  return (
    <div className={styles.recentArticle}>
      {fourArticles.map((item) => {
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
