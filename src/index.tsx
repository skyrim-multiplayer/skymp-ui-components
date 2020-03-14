import React from "react";

import "./resources/styles/index.scss";

export const Hello = () => {
  return (
    <div className="test-style">
      <div>Hello, npm!</div>
      <div>Block with style</div>
    </div>
  );
};

interface Itest {
  name: string;
  className: string;
}

export const test = ({ name, className }: Itest) => {
  return <div className={className}>{name}</div>;
};

export default Hello;
