import styles from "./categoryNews.module.css";
import { getImageUrl } from "../../utils/functions";

function CategoryNews({ title, articles, setSelectedArticle }) {
  return (
    <div className={styles.categoryNews}>
      <h2>{title}</h2>
      <div className={styles.articles}>
        {articles.map((article) => {
          return (
            <a
              href="#"
              key={article.deck}
              className={styles.item}
              onClick={() => setSelectedArticle(article)}
            >
              <img src={getImageUrl(article.image)} alt={article.headlines} />
              <h3>{article.deck}</h3>
              <p>{article.story.slice(0, 200)}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default CategoryNews;
