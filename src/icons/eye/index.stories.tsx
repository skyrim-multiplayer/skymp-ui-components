import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { EyeIcon } from "./index";

export default {
  title: "Icons/eye",
  component: EyeIcon,
  parameters: {
    jest: ["eye-icon.test.tsx"]
  }
};

export const Default = () => {
  const isOpen = boolean("isOpen", true);

  return <EyeIcon isOpen={isOpen} />;
};
