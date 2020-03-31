import React from "react";

import { InviteCodeIcon } from "./index";

export default {
  title: "Icons/invite-code",
  component: InviteCodeIcon,
  parameters: {
    jest: ["invite-code-icon.test.tsx"]
  }
};

export const Default = () => {
  return <InviteCodeIcon />;
};
