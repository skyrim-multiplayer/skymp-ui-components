import React from "react";
import { shallow, mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

import { EyeIcon } from "./index";

describe("EyeIcon", () => {
  it("renders without errors", () => {
    shallow(<EyeIcon />);
  });

  it("`isOpen` prop is true", () => {
    const wrapper = mount(<EyeIcon isOpen={true} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("`isOpen` prop is false", () => {
    const wrapper = mount(<EyeIcon isOpen={false} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
