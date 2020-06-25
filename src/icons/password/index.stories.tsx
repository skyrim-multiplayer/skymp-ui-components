import React from "react";

import { PasswordIcon } from "./index";

export default {
  title: "Icons/password",
  component: PasswordIcon,
  parameters: {
    jest: ["password-icon.test.tsx"]
  }
};

export const Default = () => {
  return <PasswordIcon />;
};
