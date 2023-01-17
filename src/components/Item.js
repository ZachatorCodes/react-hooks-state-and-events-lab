import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  function updateState() {
    setCart(inCart => !inCart);
  }

  const liClassName = inCart ? "in-cart" : "";
  const cartButtonText = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateState} className="add">{cartButtonText}</button>
    </li>
  );
}

export default Item;
