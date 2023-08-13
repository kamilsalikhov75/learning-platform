import { Center, Show } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { RoutingMenu } from "../RoutingMenu/RoutingMenu";

const Sidebar = () => {
  return (
    <Show breakpoint="(min-width: 1200px)">
      <Center
        width="250px"
        height="100vh"
        flexDirection="column"
        justifyContent="space-between"
        padding="25px"
        bg="grey"
      >
        <Center flexDirection="column" gap="10px" w="100%">
          <ChatIcon />
          <RoutingMenu />
        </Center>
        <LangSwitcher />
      </Center>
    </Show>
  );
};
export { Sidebar };
