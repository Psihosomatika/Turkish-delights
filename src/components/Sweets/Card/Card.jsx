import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ item }) => {
  const formatedPrice = item.price.toFixed(2);
  return (
    <li className={styles.card}>
      <img src={item.img} alt="сладости" className={styles.img} />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.price}>{`$${formatedPrice}`}</p>
      </div>
      <form className={styles.form}>
        <label htmlFor={item.id} className={styles.label}>
          количество
        </label>
        <div className={styles.bottom}>
          <button className={styles.button} type="button">
            -
          </button>
          <input
            type="number"
            className={styles.input}
            min="0"
            max="100"
            id={item.id}
          />
          <button type="button" className={styles.button}>
            +
          </button>
        </div>
      </form>
    </li>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
