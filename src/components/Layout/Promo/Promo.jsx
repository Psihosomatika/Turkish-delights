import styles from "./Promo.module.css";
const Promo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Мечтаете о кусочке восточного рая?</h2>
        <p className={styles.text}>
          Загляните в наш онлайн-магазин турецких сладостей!
        </p>
        <p className={styles.text}>
          Вас ждёт богатый выбор рахат-лукума, пахлавы, щербета и других
          лакомств, приготовленных по старинным рецептам из свежих, отборных
          ингредиентов.
        </p>
        <p className={styles.text}>
          Побалуйте себя и близких вкусом настоящего Востока!
        </p>
      </div>
    </section>
  );
};
export default Promo;
