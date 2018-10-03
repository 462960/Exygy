import React from "react";
import Loading from "../Loading.gif";

const loaderStyle = {
  margin: "30px auto",
  width: "30%"
};

export const Loader = () => (
  <div style={loaderStyle}>
    <img src={Loading} alt="loading" />
  </div>
);
