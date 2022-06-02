import React from "react";

function Items({ item, handleClick }) {
  const { title, price, image } = item;
  return (
    <div className="card">
      <div className="image_box">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Items;
