import reactDom from "react-dom/client";
import React from "react";
import App from "./app/App";
import FunctionContext from "./context/FunctionContext";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FunctionContext>
      <App />
    </FunctionContext>
  </React.StrictMode>
);
