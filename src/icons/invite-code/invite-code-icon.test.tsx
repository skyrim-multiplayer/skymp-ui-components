import React from "react";
import { shallow } from "enzyme";

import { InviteCodeIcon } from "./index";

describe("InviteCodeIcon", () => {
  it("renders without errors", () => {
    shallow(<InviteCodeIcon />);
  });
});
