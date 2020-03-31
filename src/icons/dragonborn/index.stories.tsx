import React from "react";

import { DragonbornIcon } from "./index";

export default {
  title: "Icons/dragonborn",
  component: DragonbornIcon,
  parameters: {
    jest: ["dragonborn-icon.test.tsx"]
  }
};

export const Default = () => {
  return <DragonbornIcon />;
};
