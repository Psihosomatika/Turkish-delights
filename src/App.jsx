// import styles from "./App.module.css";
import Foto from "./components/Layout/Foto/Foto";
import Header from "./components/Layout/Header/Header";
import SweetsList from "./components/Sweets/SweetsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <Foto />
        <SweetsList />
      </main>
      <Cart />
    </>
  );
}

export default App;
