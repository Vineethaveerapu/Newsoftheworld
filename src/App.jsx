import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BreakingNews from "./components/BreakingNews";
import styles from "./app.module.css";
import Featured from "./components/Featured";
import CategoryNews from "./components/CategoryNews";
import {
  worldArticles,
  worldThree,
  swedenThree,
  crimeThree,
  entertainmentThree,
  sportThree,
  featuredNews,
  featuredSports
} from "./data/data";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NavBar />
      <main className={styles.content}>
        <BreakingNews articles={worldArticles} />
        <Featured
          featuredNews={featuredNews.slice(0, 5)}
          featuredSports={featuredSports.slice(0, 2)}
        />
        <CategoryNews title="world" articles={worldThree} />
        <CategoryNews title="sweden" articles={swedenThree} />
        <CategoryNews title="crime" articles={crimeThree} />
        <CategoryNews title="entertainment" articles={entertainmentThree} />
        <CategoryNews title="sport" articles={sportThree} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
