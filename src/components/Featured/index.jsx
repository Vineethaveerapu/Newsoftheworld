import styles from "./featured.module.css";
import Main from "../Main";
import Recent from "../Recent";
import Sports from "../Sports";

function Featured({ featuredNews, featuredSports, setSelectedArticle }) {
  return (
    <div className={styles.featured}>
      <Recent
        articles={featuredNews.slice(0, 4)}
        setSelectedArticle={setSelectedArticle}
      />
      <Main
        article={featuredNews[featuredNews.length - 1]}
        setSelectedArticle={setSelectedArticle}
      />
      <Sports
        articles={featuredSports}
        setSelectedArticle={setSelectedArticle}
      />
    </div>
  );
}

export default Featured;
