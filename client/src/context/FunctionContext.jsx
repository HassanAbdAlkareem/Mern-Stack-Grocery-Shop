import React, { createContext, useState } from "react";

export const AlContext = createContext();

const FunctionContext = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [arrayCart, setArrayCart] = useState([]);
  //
  return (
    <AlContext.Provider
      value={{
        openCart,
        setOpenCart,
        products,
        setProducts,
        arrayCart,
        setArrayCart,
      }}
    >
      {children}
    </AlContext.Provider>
  );
};

export default FunctionContext;
