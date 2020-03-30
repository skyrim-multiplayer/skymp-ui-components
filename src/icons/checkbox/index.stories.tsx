import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { SkympCheckboxIcon } from "./index";

export default {
  title: "Icons/checkbox",
  component: SkympCheckboxIcon,
  parameters: {
    jest: ["checkbox-icon.test.tsx"]
  }
};

export const Default = () => {
  const isChecked = boolean("isChecked", true);

  return <SkympCheckboxIcon isChecked={isChecked} />;
};
