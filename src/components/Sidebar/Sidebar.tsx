import { Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { RoutingMenu } from "../RoutingMenu/RoutingMenu";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { FC } from "react";

interface SidebarProps {
  width?: string;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { width = "300px", onClose } = props;
  const bgColor = useColorModeValue("white.700", "black.800");
  return (
    <Center
      width={width}
      height="100vh"
      flexDirection="column"
      justifyContent="space-between"
      padding="25px"
      bg={bgColor}
    >
      <Center flexDirection="column" gap="10px" w="100%">
        <Heading>👨🏻‍💻</Heading>
        <RoutingMenu onClick={onClose} />
      </Center>
      <Center flexDirection="column" gap="10px" w="100%">
        <ThemeSwitcher width="100%" />
        <LangSwitcher width="100%" />
      </Center>
    </Center>
  );
};
export { Sidebar };
