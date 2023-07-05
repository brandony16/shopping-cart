import React from "react";

const CartBody = ({ cart }) => {
  return (
    <div className="cartBody">
      <div className="cartItems">
        {cart.map((item) => (
          <div className="itemWrap" key={cart.indexOf(item)}>
            <img src={item.img} alt={item.name} />
            <div className="itemInfoWrap">
              <p className="itemName">{item.name}</p>
              <p className="itemPrice">{item.price}</p>
              <p className="itemSize">{item.size}</p>
              <div className="quantityWrap">
                <button className="incrementQuantity">+</button>
                <input
                  type="number"
                  className="itemQuantity"
                  value={item.quantity}
                />
                <button className="decrementQuantity">-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartBody;
