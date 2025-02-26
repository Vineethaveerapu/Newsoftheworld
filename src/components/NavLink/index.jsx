import styles from "./navlink.module.css";

function Navlink() {
  return (
    <section className={styles.navlink}>
      <div>Home</div>
      <div>International</div>
      <div>Politics</div>
      <div>Sports</div>
      <div>Entertainment</div>
      <div>Business</div>
      <div>Science</div>
      <div>Technology</div>
      <div>Fashion</div>
    </section>
  );
}

export default Navlink;
