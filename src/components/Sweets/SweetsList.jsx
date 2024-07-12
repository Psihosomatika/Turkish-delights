import styles from "./SweetsList.module.css";
import Card from "./Card/Card";
const DISHES = [
  {
    id: "d1",
    name: "Ассорти пахлавы",
    img: "https://images.unsplash.com/photo-1657254320622-c8a8819af4c5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Большое количество слоев теста, пропитанных медом, сладким сиропом, начинкой из орехов, сухофруктами",
    price: 11.99,
  },
  {
    id: "d2",
    name: "Рахат лукум",
    img: "https://images.unsplash.com/photo-1658413380701-b24d37640ca1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Желеобразные конфетки с фундуком, изготовленные из крахмала, патоки и сахара",
    price: 3.99,
  },
  {
    id: "d3",
    name: "Шекерпаре",
    img: "https://images.unsplash.com/photo-1620292759248-3aabc1512738?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Мягкие шарики из теста на миндальной основе, смоченные густым сахарным сиропом со вкусом лимона",
    price: 4.99,
  },
  {
    id: "d4",
    name: "Нуга",
    img: "https://images.unsplash.com/photo-1555148484-324aae683a86?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Густая, тягучая с миндалем и фисташкой",
    price: 7.99,
  },
];
const SweetsList = () => {
  const list = DISHES.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <section className={styles.section}>
      <ul className={styles.wrapper}>{list}</ul>
    </section>
  );
};
export default SweetsList;
