import React, { useContext, useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import axios from "axios";
import { AlContext } from "../context/FunctionContext";

const OurHot = () => {
  const [pending, setPending] = useState(false);
  const [className, setClassName] = useState(0);
  const { products, setProducts, setOpenCart, arrayCart, setArrayCart } =
    useContext(AlContext);
  const PF = "https://grocery-shopp.herokuapp.com/images/";
  //
  const categoires = [
    "chicken",
    "curry",
    "Rice",
    "Fish",
    "Fruits",
    "Icecreams",
    "Soft Drinks",
  ];

  const handleClick = async (cate) => {
    try {
      setPending(true);
      const res = await axios.get(
        "https://grocery-shopp.herokuapp.com/api/product/" + cate
      );
      res.data && setProducts(res.data);
      setPending(false);
    } catch (error) {
      console.log(error.message);
      setPending(true);
    }
  };

  useEffect(() => {
    const getFirstChiken = async () => {
      try {
        setPending(true);
        const res = await axios.get(
          "https://grocery-shopp.herokuapp.com/api/product/chicken"
        );
        res.data && setProducts(res.data);
        setPending(false);
      } catch (error) {
        console.log(error.message);
        setPending(true);
      }
    };
    getFirstChiken();
  }, []);

  const addProductToCart = (p) => {
    if (arrayCart.length > 0) {
      var findProductInCart = arrayCart.find(
        (product) => product._id === p._id
      );
    }

    if (!findProductInCart) {
      setArrayCart((prev) => [...prev, p]);
      setOpenCart(true);
      p.inCart = true;
      p.quantity = 1;
    }
  };

  //
  return (
    <div className="our-hot">
      <div className="parent-title">
        <h3 className="title">Our Hot Dishes</h3>
        <div className="line"></div>
      </div>
      <div className="wrapper">
        <div className="top">
          {categoires.map((cate, i) => (
            <div
              key={i}
              onClick={() => (setClassName(i), handleClick(cate))}
              className={i === className ? "cate active" : "cate"}
            >
              <IoFastFood className="icon" />
              <span className="text">{cate}</span>
            </div>
          ))}
        </div>

        <div className="bottom">
          {pending && (
            <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
              Waiting Moment ...
            </h2>
          )}
          <div className="row">
            {products.map((p, i) => (
              <div key={i} className="col-12 col-sm-6  col-lg-4">
                <div className="product">
                  <div className="product-top">
                    <img src={PF + p.imgProduct} />
                    {arrayCart.find((pro) => pro._id === p._id)?.inCart ? (
                      <p
                        style={{ fontSize: "14px", padding: "10px" }}
                        className="icon"
                      >
                        In Cart
                      </p>
                    ) : (
                      <MdShoppingBasket
                        onClick={() => addProductToCart(p)}
                        className="icon"
                      />
                    )}
                  </div>
                  <div className="product-bottom">
                    <span className="name">{p.title}</span>
                    <span className="calories">{p.calories} Calories</span>
                    <span className="price">$ {p.price} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHot;
