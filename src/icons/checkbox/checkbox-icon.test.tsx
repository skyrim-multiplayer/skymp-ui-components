import React from "react";
import { shallow, mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

import { CheckboxIcon } from "./index";

describe("CheckboxIcon", () => {
  it("renders without errors", () => {
    shallow(<CheckboxIcon />);
  });

  it("`isChecked` prop is true", () => {
    const wrapper = mount(<CheckboxIcon isChecked={true} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("`isChecked` prop is false", () => {
    const wrapper = mount(<CheckboxIcon isChecked={false} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
