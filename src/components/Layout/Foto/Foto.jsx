import styles from "./Foto.module.css";
import sweets from "../../../assets/img/sweets.png";

const Foto = () => {
  return (
    <section className={styles.foto}>
      <img src={sweets} className={styles.img} alt="Турецкие сладости" />
    </section>
  );
};
export default Foto;
