import React from "react";

import { Checkbox } from "./index";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameteres: {
    jest: ["checkbox.test.tsx"]
  }
};

const Wrapper = ({ children }: { children: React.ReactChild }) => {
  return (
    <div
      style={{
        padding: "1rem",
        background: "rgba(var(--skymp-color-bg-rgb), 0.8)"
      }}
    >
      {children}
    </div>
  );
};

export const Default = () => {
  return (
    <Wrapper>
      <Checkbox onChange={e => console.log("onChange: ", e)}>Label</Checkbox>
    </Wrapper>
  );
};

export const Checked = () => {
  return (
    <Wrapper>
      <Checkbox checked>Label</Checkbox>
    </Wrapper>
  );
};

export const DefaultChecked = () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked={true}>Label</Checkbox>
    </Wrapper>
  );
};

export const DirectionRight = () => {
  return (
    <Wrapper>
      <Checkbox checkmarkPosition="right">Label</Checkbox>
    </Wrapper>
  );
};

export const Disabled = () => {
  return (
    <Wrapper>
      <Checkbox disabled>Label</Checkbox>
    </Wrapper>
  );
};
