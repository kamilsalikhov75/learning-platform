import { Flex } from "@chakra-ui/react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

const AuthHeader = () => {
  return (
    <Flex w="100%" justifyContent="center" gap="20px" padding="20px">
      <ThemeSwitcher type="icon" />
      <LangSwitcher />
    </Flex>
  );
};

export { AuthHeader };
