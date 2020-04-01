import React from "react";
import { shallow } from "enzyme";

import { Checkbox } from "./index";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    shallow(<Checkbox />);
  });
});
