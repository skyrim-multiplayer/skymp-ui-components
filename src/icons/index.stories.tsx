import React from "react";

import * as Icons from "./index";

export default {
  title: "Icons"
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {Object.keys(Icons).map((i, index) => {
        const Component = Icons[i];
        if (i !== "IconSVG") {
          return (
            <div
              style={{ flex: "1 1 20%", margin: "1em", textAlign: "center" }}
              key={index}
            >
              <p>{i}</p>
              <Component />
            </div>
          );
        } else return null;
      })}
    </div>
  );
};
