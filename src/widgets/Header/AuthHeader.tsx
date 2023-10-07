import { Flex } from "@chakra-ui/react";
import { ThemeSwitcher } from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "../../components/LangSwitcher/LangSwitcher";

const AuthHeader = () => {
  return (
    <Flex w="100%" justifyContent="center" gap="20px" padding="20px">
      <ThemeSwitcher type="icon" />
      <LangSwitcher />
    </Flex>
  );
};

export { AuthHeader };
