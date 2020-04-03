import React, { useState } from "react";

import { Input } from "./index";

import { DragonbornIcon, InviteCodeIcon } from "../../icons";

export default {
  title: "Components/Input",
  component: Input
};

const Wrapper = ({
  children
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => {
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
      <Input type="text"></Input>
    </Wrapper>
  );
};

export const WithIcon = () => {
  return (
    <Wrapper>
      <Input icon={<DragonbornIcon />} type="text"></Input>
    </Wrapper>
  );
};

export const PasswordIcon = () => {
  const [show, setShow] = useState(false);
  const [hiddenIcon, setHiddenIcon] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide password" : "Show Password"}
      </button>
      <button onClick={() => setHiddenIcon(!hiddenIcon)}>
        {hiddenIcon ? "Show Eye icon" : "Hide Eye icon"}
      </button>
      <br />
      <br />
      <Input.Password defaultShow={show} hiddenIcon={hiddenIcon} />
    </Wrapper>
  );
};


export const PasswordIconWithCustomIcon = () => {
  return (
    <Wrapper>
      <Input.Password  eyeIcon={<InviteCodeIcon />} />
      </Wrapper>
  )
}
