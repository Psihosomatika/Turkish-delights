import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>Турецкие сладости</h1>
          <HeaderCartButton />
        </div>
      </header>
    </>
  );
};

export default Header;
