import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { CheckboxIcon } from "./index";

export default {
  title: "Icons/checkbox",
  component: CheckboxIcon,
  parameters: {
    jest: ["checkbox-icon.test.tsx"]
  }
};

export const Default = () => {
  const isChecked = boolean("isChecked", true);

  return <CheckboxIcon isChecked={isChecked} />;
};
