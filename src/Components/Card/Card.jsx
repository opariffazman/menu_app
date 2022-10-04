import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ pakej, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price } = pakej;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(pakej);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(pakej);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        Pakej {title} . <span className="card__price">RM {price}</span>
      </h4>

      <div className="btn-container">
        {count !== 1 ? (
          <Button title={"+"} type={"add"} onClick={handleIncrement} />
        ) : (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
}

export default Card;
