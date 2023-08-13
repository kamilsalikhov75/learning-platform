import { Flex, Heading, Show } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SidebarDrawer } from "../Sidebar/SidebarDrawer";
import { ProfileDrawer } from "../ProfileSidebar/ProfileDrawer";

const Header = () => {
  const { t } = useTranslation();
  const userName = "Kamil";

  return (
    <Flex bg="white" color="black.800" w="100%">
      <Show breakpoint="(max-width: 1200px)">
        <SidebarDrawer />
      </Show>
      <Heading>
        {t("Привет")} {userName} 👋
      </Heading>
      <Show breakpoint="(max-width: 1200px)">
        <ProfileDrawer />
      </Show>
    </Flex>
  );
};

export { Header };
