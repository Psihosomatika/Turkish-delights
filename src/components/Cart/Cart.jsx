import styles from "./Cart.module.css";
import CloseIcon from "./CloseIcon";
const Cart = () => {
  const cartItems = (
    <ul>
      {[
        {
          id: "d3",
          name: "Шекерпаре",
          img: "https://images.unsplash.com/photo-1620292759248-3aabc1512738?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Мягкие шарики из теста на миндальной основе, смоченные густым сахарным сиропом со вкусом лимона",
          price: 4.99,
        },
      ].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div className={styles.cart}>
      <CloseIcon />
      {cartItems}
      <div>
        <p>Итого</p>
        <p>100.99</p>
      </div>
      <button>Заказать</button>
    </div>
  );
};
export default Cart;
