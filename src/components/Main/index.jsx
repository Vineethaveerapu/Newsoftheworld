import styles from "./main.module.css";
import { getImageUrl } from "../../utils/functions";

function Main(props) {
  const { article, className = "", setSelectedArticle } = props;
  // destructure
  const { headline, deck, story, image, category } = article;

  return (
    <a
      href="#"
      className={`${styles.main} ${className}`}
      onClick={() => setSelectedArticle(article)}
    >
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
    </a>
  );
}

export default Main;
