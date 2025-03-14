import { getImageUrl } from "../../utils/functions";
import styles from "./selectedArticle.module.css";

const SelectedArticle = ({ selectedArticle }) => {
  console.log("selectedArticle", selectedArticle);

  if (!selectedArticle) {
    return <div>No article selected</div>;
  }

  return (
    <div className={styles.selectedArticleContainer}>
      <div key={selectedArticle.deck} className={styles.selectedArticle}>
        <img
          src={getImageUrl(selectedArticle.image)}
          alt={selectedArticle.headlines}
        />
        <h3>{selectedArticle.deck}</h3>
        <p>{selectedArticle.story}</p>
        <p>{selectedArticle.category}</p>
      </div>
    </div>
  );
};

export default SelectedArticle;
