import styles from "./recentArticle.module.css";

function RecentArticle({ articles, setSelectedArticle }) {
  const handleClick = (article) => {
    setSelectedArticle(article);
  };
  return (
    <div className={styles.recentArticle}>
      {articles.map((item) => {
        return (
          <a
            href="#"
            className={styles.content}
            key={item.headline}
            onClick={() => handleClick(item)}
          >
            <p>{item.story.slice(0, 170)}...</p>
            <p>{item.category}</p>
          </a>
        );
      })}
    </div>
  );
}

export default RecentArticle;
