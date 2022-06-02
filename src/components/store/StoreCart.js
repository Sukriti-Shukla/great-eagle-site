import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/css/app.css";
import React, { useState, useEffect, useContext } from "react";
import { UserContext, UserContext2, UserContext3 } from "./Store";
import Store from "./Store";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
//import Items from "./components/Items";
import Cart from "./Cart";

function StoreCart(props) {
  const cart = useContext(UserContext);
  const setCart = useContext(UserContext2);
  const handleChange = useContext(UserContext3);
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "full",
        height: "full",
        minHeight: "300%",
      }}
    >
      {" "}
      <React.Fragment>
        <Navbar setShow={false} size="5" />

        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </React.Fragment>
    </div>
  );
  // return (
  //   <React.Fragment>
  //     <Navbar setShow={setShow} size={cart.length} />

  //     <BrowserRouter>
  //       <Routes>
  //         <Route index element={<Dashboard handleClick={handleClick} />} />

  //         <Route
  //           path="cart"
  //           element={
  //             <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  //           }
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   </React.Fragment>
  // );
}

export default StoreCart;
