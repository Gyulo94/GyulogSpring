import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Wrap}>
        <div>
          <div className={styles.Logo}>
            <Link to="/">
              <p>찰규의 숨겨진 공간</p>
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.MenuList}>
            <Link to="/" className={styles.Menu}>
              <p>Main</p>
            </Link>
            <Link to="/about" className={styles.Menu}>
              <p>About</p>
            </Link>
            <Link to="/blog" className={styles.Menu}>
              <p>Blog</p>
            </Link>
            <Link to="/portfolio" className={styles.Menu}>
              <p>Portfolio</p>
            </Link>
            <Link to="/contact" className={styles.Menu}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/login" className={styles.Menu}>
            <p>Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
