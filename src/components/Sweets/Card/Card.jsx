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
    </li>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
