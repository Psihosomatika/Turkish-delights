import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <CartIcon />
      <span>Корзина</span>
      <span className={styles.allotted}>2</span>
    </button>
  );
};

export default HeaderCartButton;
