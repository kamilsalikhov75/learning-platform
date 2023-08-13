import { ChatIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RoutingMenu } from "../RoutingMenu/RoutingMenu";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

const SidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        marginRight='20px'
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent bg="grey">
          <DrawerBody padding="0">
            <Center
              width="100%"
              height="100vh"
              flexDirection="column"
              justifyContent="space-between"
              padding="25px"
              bg="grey"
            >
              <Center flexDirection="column" gap="10px" w="100%">
                <ChatIcon />
                <RoutingMenu onClick={onClose} />
              </Center>
              <LangSwitcher />
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { SidebarDrawer };
