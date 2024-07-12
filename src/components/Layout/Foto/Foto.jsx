import styles from "./Foto.module.css";
import sweets from "../../../assets/img/sweets.png";
import Promo from "../Promo/Promo";

const Foto = () => {
  return (
    <section className={styles.foto}>
      <img src={sweets} className={styles.img} alt="Турецкие сладости" />
      <Promo />
    </section>
  );
};
export default Foto;
