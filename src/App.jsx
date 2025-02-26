import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styles from "./app.module.css";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <NavBar />
      <Footer />
    </main>
  );
}

export default App;
