import React, { useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [infoProduct, setInfoProduct] = useState({
    title: "",
    categoires: "",
    price: Number,
    imgProduct: null,
    calories: "",
  });
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

  const handleChange = (e) => {
    setInfoProduct({ ...infoProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", infoProduct.title);
    data.append("categoires", infoProduct.categoires);
    data.append("calories", infoProduct.calories);
    data.append("price", infoProduct.price);
    data.append("imgProduct", infoProduct.imgProduct);
    try {
      await axios.post("https://grocery-shopp.herokuapp.com/api/product", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="dashboard">
      <h2>Enter Your Product ...</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Give my a title"
          value={infoProduct?.title}
          required
        />
        <select
          value={infoProduct?.categoires}
          name="categoires"
          onChange={handleChange}
          required
        >
          <option disabled>Selcet Categoires</option>
          <option>...</option>
          {categoires.map((cate, i) => (
            <option required key={i}>
              {cate}
            </option>
          ))}
        </select>
        <div className="img">
          <input
            onChange={(e) =>
              setInfoProduct({ ...infoProduct, imgProduct: e.target.files[0] })
            }
            name="imgProduct"
            className="file"
            type="file"
            required
          />
        </div>
        <div className="wrapper-info">
          <input
            required
            onChange={handleChange}
            name="calories"
            type="text"
            placeholder="Enter Calories .."
            value={infoProduct?.calories}
          />
          <input
            required
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Enter Price .."
            value={infoProduct.price.toString()}
          />
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Dashboard;
