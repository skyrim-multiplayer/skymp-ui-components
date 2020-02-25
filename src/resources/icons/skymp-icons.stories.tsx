import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import {
  SkympArrowButtonIcon,
  SkympCheckboxIcon,
  SkympDragonbornIcon,
  SkympEmailIcon,
  SkympEyeIcon,
  SkympInviteCodeIcon,
  SkympPasswordIcon
} from "./index";

import "./story.scss";

const stories = storiesOf("Icons", module);

stories.add(
  "All icons",
  () => {
    return (
      <div className="story-icons">
        <div className="story-icons__group">
          <div className="story-icons__icon-wrapper">
            <h3>SkympArrowButtonIcon</h3>
            <SkympArrowButtonIcon />
          </div>
          <div className="story-icons__icon-wrapper">
            <h3>SkympCheckboxIcon</h3>
            <SkympCheckboxIcon
              isChecked={boolean("SkympCheckboxIcon: isChecked", true)}
            />
          </div>
          <div className="story-icons__icon-wrapper">
            <h3>SkympDragonbornIcon</h3>
            <SkympDragonbornIcon />
          </div>

          <div className="story-icons__icon-wrapper">
            <h3>SkympEmailIcon</h3>
            <SkympEmailIcon />
          </div>
        </div>

        <div className="story-icons__group">
          <div className="story-icons__icon-wrapper">
            <h3>SkympEyeIcon</h3>
            <SkympEyeIcon isOpen={boolean("SkympEyeIcon: isOpen", false)} />
          </div>
          <div className="story-icons__icon-wrapper">
            <h3>SkympInviteCodeIcon</h3>
            <SkympInviteCodeIcon />
          </div>
          <div className="story-icons__icon-wrapper">
            <h3>SkympPasswordIcon</h3>
            <SkympPasswordIcon />
          </div>
        </div>
      </div>
    );
  },
  {
    info: {
      inline: true,
      text: "Note"
    }
  }
);

stories.add(
  "icon",
  () => {
    return <SkympArrowButtonIcon className={text("class", "s")} />;
  },
  {
    info: { inline: true, text: "Note 2" }
  }
);

export interface Custom {
  style?: object;
  name?: string;
}

export const SVGCustom = (props: Custom) => {
  return (
    <svg {...props}>
      <g></g>
    </svg>
  );
};

stories.add("svgcustom", () => <SVGCustom />, {
  info: { inline: true, text: "text some" }
});

export interface Clone {
  name: string;
  age: number;
}

export const Cline = SkympArrowButtonIcon;
stories.add(
  "clone",
  () => {
    return <Cline style={{ color: "red" }} />;
  },
  { info: { inline: true, text: "age name text" } }
);

// export default {
//   component: Icons,
//   title: "Icons",
//   excludeStories: /.*Data$/
// };

// export const Default = () => (
//   <Icons>
//     <SkympArrowButtonIcon />
//     <SkympCheckboxIcon />
//     <SkympDragonbornIcon />
//     <SkympEmailIcon />
//     <SkympEyeIcon />
//     <SkympInviteCodeIcon />
//     <SkympPasswordIcon />
//   </Icons>
// );

// export const ArrowButton = () => (
//   <Icons>
//     <SkympArrowButtonIcon />
//   </Icons>
// );
// export const Checkbox = () => (
//   <Icons>
//     <SkympCheckboxIcon />
//   </Icons>
// );
