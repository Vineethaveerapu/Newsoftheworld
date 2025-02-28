import styles from "./featured.module.css";
import Main from "../Main";
import Recent from "../Recent";
import Sports from "../Sports";
import { getArticlesInCategory, articles } from "../../data/data";
const random = true;

function Featured() {
  const recentArticles = articles;
  const sportArticles = getArticlesInCategory("sports", random);
  const featuredArticles = articles[1];
  return (
    <div className={styles.featured}>
      <Recent articles={recentArticles} />
      <Main article={featuredArticles} />
      <Sports articles={sportArticles} />
    </div>
  );
}

export default Featured;
