import styles from "./featured.module.css";
import Main from "../Main";
import Recent from "../Recent";
import SportNews from "../SportNews";
import { getArticlesInCategory, articles } from "../../data/data";
const random = true;

function Featured() {
  const recentArticles = articles;
  const sportArticles = getArticlesInCategory("sports", random);
  const featuredArticles = articles[1];
  return (
    <div className={styles.featured}>
      <Recent className={styles.recent} articles={recentArticles} />
      <Main className={styles.main} article={featuredArticles} />
      <SportNews className={styles.sportNews} articles={sportArticles} />
    </div>
  );
}

export default Featured;
