import styles from "./sportNews.module.css";
import { getImageUrl } from "../../utils/functions";

function SportNews({ articles, setSelectedArticle }) {
  return (
    <div className={`${styles.sportNews} `}>
      {articles?.map((item) => {
        const { image, headline, deck } = item;
        return (
          <a
            href="#"
            className={styles.content}
            key={headline}
            onClick={() => setSelectedArticle(item)}
          >
            <div className={styles.sportsImage}>
              <img src={getImageUrl(image)} alt={headline} />
            </div>
            <h3>{headline}</h3>
            <p>{deck}</p>
          </a>
        );
      })}
    </div>
  );
}

export default SportNews;
