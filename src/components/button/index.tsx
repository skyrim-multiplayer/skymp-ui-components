import { Button as ButtonComponent, ButtonProps } from "./button";
import { Group, ButtonGroupProps } from "./group";

const Button = Object.assign(ButtonComponent, { Group });

export { Button, ButtonProps, ButtonGroupProps };
