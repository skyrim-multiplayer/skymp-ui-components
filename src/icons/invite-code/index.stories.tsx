import React from "react";

import { SkympInviteCodeIcon } from "./index";

export default {
  title: "Icons/invite-code",
  component: SkympInviteCodeIcon,
  parameters: {
    jest: ["invite-code-icon.test.tsx"]
  }
};

export const Default = () => {
  return <SkympInviteCodeIcon />;
};
