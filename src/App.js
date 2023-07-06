import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import "./styles/globalStyles.css";
import Product from "./components/bodyComponents/shopComponents/Product";
import ProductList from "./components/utils/ProductList";

function App() {
  const [cart, setCart] = useState([]);
  const [amountInCart, setAmountInCart] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
    setSubtotal(calculateSubtotal());
  }, [cart]);

  const addToCart = (product, itemSize) => {
    let match = cart.filter(
      (item) => item.name === product.name && item.size === itemSize
    );
    if (match[0]) {
      match[0] = { ...match[0], quantity: match[0].quantity + 1 };
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.name === match[0].name && item.size === match[0].size) {
            return match[0];
          }
          return item;
        });
        return updatedCart;
      });
      setAmountInCart((prevAmount) => prevAmount + 1);
      return;
    }
    const newProduct = { ...product, size: itemSize, quantity: 1 };
    setCart([...cart, newProduct]);
    setAmountInCart((prevAmount) => prevAmount + 1);
  };

  const handleQuantityChange = (e, product, act) => {
    let newProduct;
    if (act === "increment") {
      newProduct = { ...product, quantity: product.quantity + 1 };
    }
    if (act === "decrement") {
      newProduct = { ...product, quantity: product.quantity - 1 };
    }
    if (act === "itemQuantity") {
      const quantity = parseInt(e.target.value);
      newProduct = { ...product, quantity: isNaN(quantity) ? 0 : quantity };
    }

    if (newProduct.quantity < 1) {
      handleDeleteProduct(product);
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name === product.name && item.size === product.size) {
          return newProduct;
        }
        return item;
      });
      return updatedCart;
    });

    setAmountInCart(
      (prevAmount) => prevAmount + (newProduct.quantity - product.quantity)
    );
  };

  const handleDeleteProduct = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
    setAmountInCart(amountInCart - product.quantity);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home amountInCart={amountInCart} />} />
        <Route path="/shop">
          <Route index element={<Shop amountInCart={amountInCart} />} />
          {ProductList.map((e) => {
            return (
              <Route
                key={e.name}
                path={`/shop/${e.name.replace(/\s/g, "-")}`}
                element={
                  <Product
                    product={e}
                    addToCart={addToCart}
                    amountInCart={amountInCart}
                  />
                }
              />
            );
          })}
        </Route>
        <Route path="/about" element={<About amountInCart={amountInCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleQuantityChange={handleQuantityChange}
              handleDeleteProduct={handleDeleteProduct}
              subtotal={subtotal}
              amountInCart={amountInCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
