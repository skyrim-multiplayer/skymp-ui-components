import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { SkympEyeIcon } from "./index";

export default {
  title: "Icons/eye",
  component: SkympEyeIcon,
  parameters: {
    jest: ["eye-icon.test.tsx"]
  }
};

export const Default = () => {
  const isOpen = boolean("isOpen", true);

  return <SkympEyeIcon isOpen={isOpen} />;
};
