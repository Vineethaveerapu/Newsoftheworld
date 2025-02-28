import styles from "./headlines.module.css";

function Headlines({ articles }) {
  return (
    <div className={styles.headlines}>
      {articles?.map((article) => (
        <div key={article.headline} className={styles.headline}>
          {article.headline}
        </div>
      ))}
    </div>
  );
}

export default Headlines;
