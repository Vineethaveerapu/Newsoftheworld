import styles from "./sportNews.module.css";
import { getImageUrl } from "../../utils/functions";
import { sportArticles } from "../../data/data.js";

function SportNews({ className = "" }) {
  const twoArticles = sportArticles.slice(0, 2);
  // console.log("twoArticles", twoArticles);
  return (
    <div className={`${styles.sportNews} ${className}`}>
      {twoArticles.map((item) => {
        const { image, headline, deck } = item;
        return (
          <div className={styles.content} key={headline}>
            <div className={styles.sportsImage}>
              <img src={getImageUrl(image)} alt={headline} />
            </div>
            <h3>{headline}</h3>
            <p>{deck}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SportNews;
