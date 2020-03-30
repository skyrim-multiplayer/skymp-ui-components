import React from "react";
import { shallow, mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

import { SkympEyeIcon } from "./index";

describe("SkympEyeIcon", () => {
  it("renders without errors", () => {
    shallow(<SkympEyeIcon />);
  });

  it("`isOpen` prop is true", () => {
    const wrapper = mount(<SkympEyeIcon isOpen={true} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("`isOpen` prop is false", () => {
    const wrapper = mount(<SkympEyeIcon isOpen={false} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
