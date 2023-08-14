import {
  Drawer,
  DrawerBody,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ProfileIcon } from "../ui/icons/ProfileIcon";
import { ProfileSidebar } from "./ProfileSidebar";

const ProfileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

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
        <DrawerContent bg="grey">
          <DrawerBody padding="0">
            <ProfileSidebar width="100%" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { ProfileDrawer };
