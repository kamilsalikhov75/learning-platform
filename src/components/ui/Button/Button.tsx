import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { FC } from "react";

export interface ButtonProps extends ChakraButtonProps {}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, width, children, ...otherProps } = props;
  return (
    <ChakraButton
      borderRadius="20px"
      onClick={onClick}
      width={width}
      {...otherProps}
    >
      {children}
    </ChakraButton>
  );
};

export { Button };
