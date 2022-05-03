import React from "react";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import Interface from "../../components/Interface";
import OurHot from "../../components/OurHot";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Interface />
        <Cart />
        <OurHot />
      </div>
    </>
  );
};

export default Home;
