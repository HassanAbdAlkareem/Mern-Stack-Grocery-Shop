import React, { useContext } from "react";
import logo from "../image/logo.png";
import avatar from "../image/avatar.png";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AlContext } from "../context/FunctionContext";

const Navbar = () => {
  const { openCart, setOpenCart, arrayCart } = useContext(AlContext);

  return (
    <div className="navbar-pure">
      <div className="wrapper">
        <div className="left">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <h2>Grocery</h2>
        </div>
        <div className="center">
          <ul>
            <Link to={"/dashboard"}>
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
            <BsCart2 className="icon" />
            <span className="num-cart">{arrayCart?.length}</span>
          </div>
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
