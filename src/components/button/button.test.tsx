import React from "react";
import { shallow } from "enzyme";

import { Button } from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
});
