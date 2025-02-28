import styles from "./headlines.module.css";
import { articles } from "../../data/data";

const threeArticles = articles.slice(0, 3);

function Headlines() {
  return (
    <div className={styles.headlines}>
      {threeArticles.map((article) => (
        <div key={article.headline} className={styles.headline}>
          {article.headline}
        </div>
      ))}
    </div>
  );
}

export default Headlines;
