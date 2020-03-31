import React from "react";

import { EmailIcon } from "./index";

export default {
  title: "Icons/email",
  component: EmailIcon,
  parameters: {
    jest: ["email-icon.test.tsx"]
  }
};

export const Default = () => {
  return <EmailIcon />;
};
