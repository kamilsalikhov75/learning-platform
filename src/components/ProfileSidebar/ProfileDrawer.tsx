import {
  Avatar,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ProfileIcon } from "../ui/icons/ProfileIcon";

const ProfileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { t } = useTranslation();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        ref={btnRef}
        icon={<ProfileIcon />}
        onClick={onOpen}
        marginRight="20px"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
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
              <Flex flexDirection="column" gap="10px" w="100%">
                <Heading size="md" marginBottom="30px">
                  {t("Профиль")}
                </Heading>
                <Center>
                  <Avatar
                    size="2xl"
                    name="Kamil Salikhov"
                    src="https://bit.ly/dan-abramov"
                  />
                </Center>
              </Flex>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { ProfileDrawer };
