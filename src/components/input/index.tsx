import { Input as InputComponent, InputProps } from "./input";
import { Password, InputPasswordProps } from "./password";

const Input = Object.assign(InputComponent, { Password });

export { Input, InputProps, InputPasswordProps };
