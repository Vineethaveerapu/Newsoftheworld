import styles from "./featured.module.css";
import Main from "../Main";
import Recent from "../Recent";
import Sports from "../Sports";

function Featured({ featuredNews, featuredSports }) {
  return (
    <div className={styles.featured}>
      <Recent articles={featuredNews.slice(0, 4)} />
      <Main article={featuredNews[featuredNews.length - 1]} />
      <Sports articles={featuredSports} />
    </div>
  );
}

export default Featured;
