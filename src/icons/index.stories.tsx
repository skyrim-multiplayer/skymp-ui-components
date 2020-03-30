import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, color, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import {
  SkympArrowButtonIcon,
  SkympCheckboxIcon,
  SkympDragonbornIcon,
  SkympEmailIcon,
  SkympEyeIcon,
  SkympInviteCodeIcon,
  SkympPasswordIcon
} from "./index";

export default {
  title: "Icons",
  component: SkympArrowButtonIcon,
  parameters: {
    jest: ["arrow-button.test.tsx"]
  }
}

export const Default = () => {
  return <div>Hello</div>
}

// import "./style.stories.scss";

// const stories = storiesOf("Icons", module);

// stories.add(
//   "All",
//   () => {
//     return (
//       <div className="story-icons story-icons__all">
//         <div>
//           <h3>SkympArrowButtonIcon</h3>
//           <SkympArrowButtonIcon />
//         </div>

//         <div>
//           <h3>SkympCheckboxIcon</h3>
//           <SkympCheckboxIcon
//             isChecked={boolean("SkympCheckboxIcon: isChecked", true)}
//           />
//         </div>

//         <div>
//           <h3>SkympDragonbornIcon</h3>
//           <SkympDragonbornIcon />
//         </div>

//         <div>
//           <h3>SkympEmailIcon</h3>
//           <SkympEmailIcon />
//         </div>

//         <div>
//           <h3>SkympEyeIcon</h3>
//           <SkympEyeIcon isOpen={boolean("SkympEyeIcon: isOpen", false)} />
//         </div>

//         <div>
//           <h3>SkympInviteCodeIcon</h3>
//           <SkympInviteCodeIcon />
//         </div>

//         <div>
//           <h3>SkympPasswordIcon</h3>
//           <SkympPasswordIcon />
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: false,
//       text: `
//       Icons realize interface \`React.SVGProps<SVGSVGElement>\`
//     `
//     }
//   }
// );

// stories.add(
//   "SkympArrowButtonIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");
//     const textState = text("text", "some text");
//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper story-skymp-arrow-button-icon__wrapper">
//           <SkympArrowButtonIcon color={fillColor} />

//           <div style={{ transform: "rotate(-180deg)", display: "flex" }}>
//             <SkympArrowButtonIcon color={fillColor} />
//           </div>

//           <div style={{ transform: "rotate(-90deg)", display: "flex" }}>
//             <SkympArrowButtonIcon color={fillColor} />
//           </div>

//           <div style={{ transform: "rotate(90deg)", display: "flex" }}>
//             <SkympArrowButtonIcon color={fillColor} />
//           </div>
//         </div>

//         <div
//           className="story-skymp-arrow-button-icon__example"
//           style={{
//             color: fillColor
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <SkympArrowButtonIcon />
//           </div>
//           <p>{textState}</p>
//           <div style={{ transform: "rotate(-180deg)", display: "flex" }}>
//             <SkympArrowButtonIcon />
//           </div>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympCheckboxIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");
//     const isChecked = boolean("isChecked", true);

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper story-skymp-checkbox-icon__wrapper">
//           <div>
//             <code>isChecked = true</code>
//             <SkympCheckboxIcon isChecked={true} />
//           </div>
//           <div>
//             <code>isChecked = false</code>
//             <SkympCheckboxIcon isChecked={false} />
//           </div>
//         </div>

//         <div
//           className="story-icons__example story-skymp-checkbox-icon__example"
//           onClick={action("icon checked")}
//           style={{ color: fillColor }}
//         >
//           <SkympCheckboxIcon isChecked={isChecked} />
//           <div>Label</div>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympDragonbornIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper story-skymp-dragonborn-icon__wrapper">
//           <SkympDragonbornIcon />
//           Dragonborn
//         </div>

//         <div
//           className="story-icons__example story-icons__input"
//           style={{ color: fillColor }}
//         >
//           <SkympDragonbornIcon />
//           <input
//             type="text"
//             placeholder="Placeholder"
//             style={{ color: fillColor }}
//           ></input>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympEmailIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper">
//           <SkympEmailIcon />
//         </div>

//         <div
//           className="story__example story-icons__input"
//           style={{ color: fillColor }}
//         >
//           <SkympEmailIcon />
//           <input
//             type="text"
//             placeholder="dragonborn@skymp.com"
//             style={{ color: fillColor }}
//           ></input>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympEyeIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");
//     const isOpen = boolean("isOpen", false);

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper">
//           <SkympEyeIcon />
//         </div>

//         <div
//           className="story-icons__example story-icons__input"
//           style={{ color: fillColor }}
//         >
//           <SkympEyeIcon isOpen={isOpen} onClick={action("clicked icon")} />
//           <input
//             type={isOpen ? "text" : "password"}
//             placeholder="Password"
//             style={{ color: fillColor }}
//           ></input>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympInviteCodeIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper">
//           <SkympInviteCodeIcon />
//         </div>

//         <div
//           className="story-icons__example story-icons__input"
//           style={{ color: fillColor }}
//         >
//           <SkympInviteCodeIcon />
//           <input
//             type="text"
//             placeholder="123456"
//             style={{ color: fillColor }}
//           ></input>
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );

// stories.add(
//   "SkympPasswordIcon",
//   () => {
//     const fillColor = color("color", "rgba(var(--skymp-second-color), 1)");
//     const isOpen = boolean("isOpen", false);

//     return (
//       <div className="story-icons story-icons__story">
//         <div className="story-icons__wrapper">
//           <SkympPasswordIcon />
//         </div>

//         <div
//           className="story-icons__example story-icons__input"
//           style={{ color: fillColor }}
//         >
//           <SkympEyeIcon isOpen={isOpen} onClick={action("clicked icon")} />
//           <input
//             type={isOpen ? "text" : "password"}
//             placeholder="Password"
//             style={{ color: fillColor }}
//           ></input>
//           <SkympPasswordIcon style={{ marginLeft: "1rem" }} />
//         </div>
//       </div>
//     );
//   },
//   {
//     info: {
//       inline: true
//     }
//   }
// );
