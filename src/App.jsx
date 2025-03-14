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
import DisplayCategory from "./components/DisplayCategory";
import { useState } from "react";
import SelectedArticle from "./components/SelectedArticle";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const renderMain = () => {
    if (selectedArticle) {
      return <SelectedArticle selectedArticle={selectedArticle} />;
    }

    if (selectedCategory) {
      return (
        <DisplayCategory
          categoryToDisplay={selectedCategory}
          setSelectedArticle={setSelectedArticle}
        />
      );
    }

    return (
      <>
        <BreakingNews
          articles={worldArticles}
          setSelectedArticle={setSelectedArticle}
        />
        <Featured
          featuredNews={featuredNews.slice(0, 5)}
          featuredSports={featuredSports.slice(0, 2)}
          setSelectedArticle={setSelectedArticle}
        />
        <CategoryNews
          title="world"
          articles={worldThree}
          setSelectedArticle={setSelectedArticle}
        />
        <CategoryNews
          title="sweden"
          articles={swedenThree}
          setSelectedArticle={setSelectedArticle}
        />
        <CategoryNews
          title="crime"
          articles={crimeThree}
          setSelectedArticle={setSelectedArticle}
        />
        <CategoryNews
          title="entertainment"
          articles={entertainmentThree}
          setSelectedArticle={setSelectedArticle}
        />
        <CategoryNews
          title="sport"
          articles={sportThree}
          setSelectedArticle={setSelectedArticle}
        />
      </>
    );
  };

  return (
    <div className={styles.app}>
      <Header />
      <NavBar setSelectedCategory={setSelectedCategory} />
      <main className={styles.content}>{renderMain()}</main>
      <Footer />
    </div>
  );
}

export default App;
