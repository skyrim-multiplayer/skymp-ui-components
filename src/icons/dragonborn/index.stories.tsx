import React from "react";

import { SkympDragonbornIcon } from "./index";

export default {
  title: "Icons/dragonborn",
  component: SkympDragonbornIcon,
  parameters: {
    jest: ["dragonborn-icon.test.tsx"]
  }
};

export const Default = () => {
  return <SkympDragonbornIcon />;
};
