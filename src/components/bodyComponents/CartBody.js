import React from "react";
import trashCan from "../../assets/trashCan.svg";
import "../../styles/BodyStyles/CartBody.css";

const CartBody = ({ cart, handleQuantityChange }) => {
  return (
    <div className="cartBody">
      <div className="cartHeader">
        <h2 className="cartTitle">Your Cart</h2>
        <div className="amountOfItems">
          You currently have{" "}
          {cart.length === 1 ? cart.length + " item" : cart.length + " items"}
        </div>
      </div>
      <div className="cartItems">
        {cart.map((item) => (
          <div className="itemWrap" key={cart.indexOf(item)}>
            <div className="itemImgWrap">
              <img src={item.img} alt={item.name} className="itemImg" />
            </div>
            <div className="itemInfoWrap">
              <div className="cartItemHeader">
                <p className="itemName">{item.name}</p>
                <img
                  src={trashCan}
                  alt="remove from cart"
                  className="removeFromCart"
                />
              </div>
              <div className="priceWrap">
                <p className="itemPriceDollar">{item.price.split(".")[0]}</p>
                <p className="itemPriceCent">{item.price.split(".")[1]}</p>
              </div>{" "}
              <p className="itemSize">Size: {item.size}</p>
              <div className="quantityWrap">
                <button
                  className="quantityChange"
                  onClick={(e) => handleQuantityChange(e, item, "decrement")}
                >
                  -
                </button>
                <input
                  type="number"
                  className="itemQuantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(e, item, "itemQuantity")
                  }
                />
                <button
                  className="quantityChange"
                  onClick={(e) => handleQuantityChange(e, item, "increment")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartBody;
