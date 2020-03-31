import React from "react";
import { shallow } from "enzyme";

import { DragonbornIcon } from "./index";

describe("DragonbornIcon", () => {
  it("renders without errors", () => {
    shallow(<DragonbornIcon />);
  });
});
