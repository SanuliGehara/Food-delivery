import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to TomatoDelight! Choose from a diverse menu of delicious
          dishes crafted with the finest ingredients and culinary expertise.
          Enjoy quick and reliable delivery right to your door. Our mission is
          to satisfy your cravings and enhance your dining experience with every
          meal.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
