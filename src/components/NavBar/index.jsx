import NavLink from "../NavLink";
import DateText from "../DateText";
import styles from "./navBar.module.css";
import articles from "../../data/data";

function NavBar({ setSelectedCategory }) {
  const uniqueCategories = [...new Set(articles.map((item) => item.category))];

  const handleClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.mobileMenu}>icon</div>
      {uniqueCategories.map((category, index) => (
        <NavLink
          key={index}
          title={category}
          link="#"
          onClick={() => handleClick(category)}
        />
      ))}
      <DateText />
    </div>
  );
}

export default NavBar;
