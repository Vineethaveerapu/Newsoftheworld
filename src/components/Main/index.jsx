import styles from "./main.module.css";
import { getImageUrl } from "../../utils/functions";
function Main({ article, className = "" }) {
  const { headline, deck, story, image, category } = article;
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={getImageUrl(image)} alt={headline} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{headline}</div>
          <div className={styles.cardDescription}>{deck}</div>
          <div className={styles.story}>
            <p>{story.slice(0, 400)}...</p>
          </div>
          <div className={styles.cardAuthor}>{category}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
