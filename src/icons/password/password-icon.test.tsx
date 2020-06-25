import React from "react";
import { shallow } from "enzyme";

import { PasswordIcon } from "./index";

describe("PasswordIcon", () => {
  it("renders without errors", () => {
    shallow(<PasswordIcon />);
  });
});
