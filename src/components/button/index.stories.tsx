import React from "react";

import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    jest: ["button.test.tsx"]
  }
};

const Wrapper = ({
  children
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <div
      style={{
        padding: "1rem",
        background:
          "rgba(var(--sky-color-bg-rgb), 0.8)"
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
  return (
    <Wrapper>
      <Button disabled>Button</Button>
    </Wrapper>
  );
};

export const Group = () => {
  return (
    <Wrapper>
      <Button.Group>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
    </Wrapper>
  );
};

export const ActiveButtonGroup = () => {
  return (
    <Wrapper>
      <Button.Group>
        <Button>Button 1</Button>
        <Button active>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
    </Wrapper>
  );
};

export const ActiveButton = () => {
  return (
    <Wrapper>
      <Button active>Active Button</Button>
      <Button>Button</Button>
    </Wrapper>
  );
};

export const VisibleArrowGroup = () => {
  return (
    <Wrapper>
      <Button.Group visibleIcons>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Button.Group>
    </Wrapper>
  );
};
