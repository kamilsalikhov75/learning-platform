import {
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ProfileIcon } from "../../shared/ui/icons/ProfileIcon";
import { ProfileSidebar } from "./ProfileSidebar";

const ProfileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const bgColor = useColorModeValue("white.700", "black.800");

  return (
    <>
      <IconButton
        aria-label="Open menu"
        ref={btnRef}
        icon={<ProfileIcon />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent bg={bgColor}>
          <DrawerBody padding="0">
            <ProfileSidebar width="100%" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { ProfileDrawer };
