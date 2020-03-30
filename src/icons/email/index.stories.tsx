import React from "react";

import { SkympEmailIcon } from "./index";

export default {
  title: "Icons/email",
  component: SkympEmailIcon,
  parameters: {
    jest: ["email-icon.test.tsx"]
  }
};

export const Default = () => {
  return <SkympEmailIcon />;
};
