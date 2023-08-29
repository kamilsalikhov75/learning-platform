import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { FC } from "react";

export interface ButtonProps extends ChakraButtonProps {}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, width, children, borderRadius="20px", ...otherProps } = props;
  return (
    <ChakraButton
      borderRadius={borderRadius}
      onClick={onClick}
      width={width}
      {...otherProps}
    >
      {children}
    </ChakraButton>
  );
};

export { Button };
