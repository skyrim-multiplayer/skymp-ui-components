import React from "react";
import { shallow } from "enzyme";

import { ArrowButtonIcon } from "./index";

describe("SkympArrowButtonIcon", () => {
  it("renders without errors", () => {
    shallow(<ArrowButtonIcon />);
  });
});
