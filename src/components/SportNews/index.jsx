import styles from "./sportNews.module.css";
import { getImageUrl } from "../../utils/functions";

function SportNews({ articles }) {
  return (
    <div className={`${styles.sportNews} `}>
      {articles?.map((item) => {
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
