import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Sidebar } from "./Sidebar";

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
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent bg="grey">
          <DrawerBody padding="0">
            <Sidebar width="100%" onClose={onClose}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { SidebarDrawer };
