import React from "react";

import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    jest: ["button.test.tsx"]
  }
};

const Wrapper = ({ children }: { children: React.ReactChild }) => {
  return (
    <div
      style={{
        padding: "1rem",
        background:
          "rgba(var(--skymp-background-color), var(--skymp-background-opacity))"
      }}
    >
      {children}
    </div>
  );
};

export const Default = () => {
  return (
    <Wrapper>
      <Button>Button</Button>
    </Wrapper>
  );
};

export const Disabled = () => {
  return <Wrapper>
    <Button disabled>Button</Button>
  </Wrapper>
}
