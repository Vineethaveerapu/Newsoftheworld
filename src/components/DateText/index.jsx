import styles from "./dateText.module.css";

function DateText() {
  const formattedDate = new Date()
    .toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
    .replace(/,/g, "")
    .replace(" ", ", ");

  return <div className={styles.dateText}>{formattedDate}</div>;
}

export default DateText;
