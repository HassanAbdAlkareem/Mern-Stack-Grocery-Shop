import React from "react";
import i1 from "../image/i1.png";
import f5 from "../image/f5.png";
import c3 from "../image/c3.png";
import fi1 from "../image/fi1.png";

const Interface = () => {
  const arrayInterFace = [
    { img: i1, name: "Icecream", price: 5.25 },
    { img: f5, name: "Strowberries", price: 10.25 },
    { img: c3, name: "Chicken Kebbab", price: 6.25 },
    { img: fi1, name: "Fish Kebab", price: 5.25 },
  ];
  //
  return (
    <div className="interface">
      <div className="wrapper">
        <div className="left">
          <h1 className="title">The Fastest</h1>
          <h1>Delivery in</h1>
          <h1 className="color">City</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque
            provident maxime libero ipsum. Consequatur iste fugiat veniam minima
            tenetur, quod quo! Laboriosam inventore odio saepe aliquid tempore
            earum ullam!
          </p>
          <button>Order Now</button>
        </div>
        <div className="right">
          <div className="row">
            {arrayInterFace.map((data, i) => (
              <div key={i} className="col-lg-6">
                <div className="cart-interface">
                  <div className="img">
                    <img src={data.img} />
                  </div>
                  <span className="name">{data.name}</span>
                  <span className="price">$ {data.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
