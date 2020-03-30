import React from "react";

import { SkympArrowButtonIcon } from "./index";

export default {
  title: "Icons/arrow-button",
  component: SkympArrowButtonIcon,
  parameters: {
    jest: ["arrow-button.test.tsx"]
  }
};

export const Default = () => {
  return <SkympArrowButtonIcon />;
};
