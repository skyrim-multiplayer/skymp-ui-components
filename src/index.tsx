import React from "react";

import { Test } from "./components/skymp-window";

import "./style.scss";

export const Hello = () => {
  return (
    <div className="test-style">
      <div>Hello, npm!</div>
      <div>Block with style</div>
      <Test />
    </div>
  );
};

export default Hello;
