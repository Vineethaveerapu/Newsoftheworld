import styles from "./socialMedia.module.css";
import fbIcon from "/src/assets/facebook.svg";
import youtubeIcon from "/src/assets/youtube.svg";
import xIcon from "/src/assets/x.svg";
import instagramIcon from "/src/assets/instagram.svg";

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <a href="#">
        <img src={fbIcon} alt="facebook Link" />
      </a>
      <a href="#">
        <img src={youtubeIcon} alt="youtube Link" />
      </a>
      <a href="#">
        <img src={xIcon} alt="x Link" />
      </a>
      <a href="#">
        <img src={instagramIcon} alt="instagram Link" />
      </a>
    </div>
  );
}
export default SocialMedia;
