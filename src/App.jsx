import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BreakingNews from "./components/BreakingNews";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NavBar />
      <main className={styles.content}>
        <BreakingNews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
