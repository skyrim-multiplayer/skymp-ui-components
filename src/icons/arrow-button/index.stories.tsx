import React from "react";

import { ArrowButtonIcon } from "./index";

export default {
  title: "Icons/arrow-button",
  component: ArrowButtonIcon,
  parameters: {
    jest: ["arrow-button.test.tsx"]
  }
};

export const Default = () => {
  return <ArrowButtonIcon />;
};
