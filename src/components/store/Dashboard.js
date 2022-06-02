import React, { useState } from "react";
import list from "../data";
import Items from "./Items";
//import "../styles/css/item.css";
import "../styles/dashboard.css";

function Dashboard({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Items key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default Dashboard;
