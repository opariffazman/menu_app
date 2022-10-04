import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const pakejs = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (pakej) => {
    const exist = cartItems.find((x) => x.id === pakej.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === pakej.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...pakej, quantity: 1 }]);
    }
  };

  const onRemove = (pakej) => {
    const exist = cartItems.find((x) => x.id === pakej.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== pakej.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === pakej.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Beli Pakej</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {pakejs.map((pakej) => {
          return (
            <Card pakej={pakej} key={pakej.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
