import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BreakingNews from "./components/BreakingNews";
import styles from "./app.module.css";
import Featured from "./components/Featured";
import CategoryNews from "./components/CategoryNews";
import { getArticlesInCategory } from "./data/data";

function App() {
  const sportArticles = getArticlesInCategory("sport", true);
  const swedenArticles = getArticlesInCategory("sweden", true);
  const crimeArticles = getArticlesInCategory("crime", true);
  const worldArticles = getArticlesInCategory("world", true);
  const entertainmentArticles = getArticlesInCategory("entertainment", true);

  const worldThree = worldArticles.slice(0, 3);
  const swedenThree = swedenArticles.slice(0, 3);
  const crimeThree = crimeArticles.slice(0, 3);
  const entertainmentThree = entertainmentArticles.slice(0, 3);
  const sportThree = sportArticles.slice(0, 3);

  const featuredNews = [
    ...worldArticles.slice(3, -1),
    ...swedenArticles.slice(3, -1),
    ...crimeArticles.slice(3, -1),
    ...entertainmentArticles.slice(3, -1)
  ].sort(() => Math.random() - 0.5);

  const featuredSports = [...sportArticles.slice(3, -1)].sort(
    () => Math.random() - 0.5
  );

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
