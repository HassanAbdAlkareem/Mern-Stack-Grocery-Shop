import React, { useContext } from "react";
import { AlContext } from "../context/FunctionContext";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import emptyCart from "../image/emptyCart.svg";
//
const Cart = () => {
  const { openCart, setOpenCart, arrayCart, setArrayCart } =
    useContext(AlContext);
  const PF = "https://grocery-shopp.herokuapp.com/images/";

  const increce = (item) => {
    const tempCart = [...arrayCart];
    tempCart.find((findOne) => {
      if (findOne._id === item._id) {
        return (item.quantity += 1);
      }
    });
    setArrayCart(tempCart);
  };

  const decriece = (itemCart) => {
    let tempCart = [...arrayCart];
    tempCart.find((item) => {
      if (item._id === itemCart._id) {
        itemCart.quantity -= 1;
      }
    });
    setArrayCart(tempCart);
    itemCart.quantity == 0 && deleteItem(itemCart._id);
  };

  const deleteItem = (id) => {
    console.log("form here");
    console.log(id);
    const filter = arrayCart.filter((item) => item._id !== id);
    setArrayCart(filter);
  };

  return (
    <div className={openCart ? "cart active" : "cart"}>
      <div className="top-cart">
        <BsArrowLeft onClick={() => setOpenCart(false)} className="icon-back" />
        <b>Cart</b>
        <div
          onClick={() => (setOpenCart(false), setArrayCart([]))}
          className="clear"
        >
          <span>Clear</span>
          <AiFillDelete className="icon" />
        </div>
      </div>

      {arrayCart.length === 0 ? (
        <div className="for-img">
          <h4 className="no-products">No Products Yet ..</h4>
          <img className="img-empty" src={emptyCart} alt="" />
        </div>
      ) : (
        <div className="bottom-cart">
          <div className="first">
            <div className="wrapper-cart">
              {arrayCart.map((item, i) => (
                <div key={i} className="parent-item">
                  <div className="left-info">
                    <p>Total Price : ${item.price * item.quantity}</p>
                    <img src={PF + item.imgProduct} alt="" />
                    <div className="parent-text">
                      <span className="name-product">{item.title}</span>
                      <span className="price-product">$ {item.price}</span>
                    </div>
                  </div>

                  <div className="right-info">
                    <span className="decriece" onClick={() => decriece(item)}>
                      -
                    </span>
                    <span className="amount">{item.quantity}</span>
                    <span className="increce" onClick={() => increce(item)}>
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
