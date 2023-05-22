import React, { useState } from "react";

function GroceryItem() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item} has been added to your cart!`);
  };

  return (
    <div>
      <h1>Online Grocery Store</h1>
      <button onClick={() => addToCart("Apples")}>Add Apples</button>
      <button onClick={() => addToCart("Bananas")}>Add Bananas</button>
      <button onClick={() => addToCart("Oranges")}>Add Oranges</button>
      <button onClick={() => addToCart("Grapes")}>Add Grapes</button>
      <hr />
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default GroceryItem;