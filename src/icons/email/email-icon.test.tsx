import React from "react";
import { shallow } from "enzyme";

import { EmailIcon } from "./index";

describe("EmailIcon", () => {
  it("renders without errors", () => {
    shallow(<EmailIcon />);
  });
});
