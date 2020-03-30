import React from "react";

import { SkympPasswordIcon } from "./index";

export default {
  title: "Icons/password",
  component: SkympPasswordIcon,
  parameters: {
    jest: ["password-icon.test.tsx"]
  }
};

export const Default = () => {
  return <SkympPasswordIcon />;
};
