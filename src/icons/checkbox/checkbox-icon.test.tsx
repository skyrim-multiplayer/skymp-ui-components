import React from "react";
import { shallow, mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

import { SkympCheckboxIcon } from "./index";

describe("SkympCheckboxIcon", () => {
  it("renders without errors", () => {
    shallow(<SkympCheckboxIcon />);
  });

  it("`isChecked` prop is true", () => {
    const wrapper = mount(<SkympCheckboxIcon isChecked={true} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("`isChecked` prop is false", () => {
    const wrapper = mount(<SkympCheckboxIcon isChecked={false} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
