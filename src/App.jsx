import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BreakingNews from "./components/BreakingNews";
import styles from "./app.module.css";
import Featured from "./components/Featured";
import CategoryNews from "./components/CategoryNews";
import {
  sportArticles,
  swedenArticles,
  crimeArticles,
  worldArticles,
  entertainmentArticles
} from "./data/data";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NavBar />
      <main className={styles.content}>
        <BreakingNews />
        <Featured />
        <CategoryNews title="world" articles={worldArticles.slice(0, 3)} />
        <CategoryNews title="sweden" articles={swedenArticles.slice(0, 3)} />
        <CategoryNews title="crime" articles={crimeArticles.slice(0, 3)} />
        <CategoryNews
          title="entertainment"
          articles={entertainmentArticles.slice(0, 3)}
        />
        <CategoryNews title="sport" articles={sportArticles.slice(0, 3)} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
