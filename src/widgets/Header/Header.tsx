import { Flex, Heading, Show } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SidebarDrawer } from "../../components/Sidebar/SidebarDrawer";
import { ProfileDrawer } from "../../components/ProfileSidebar/ProfileDrawer";
import { useStore } from "effector-react";
import { $user } from "@/features/user";

const Header = () => {
  const { t } = useTranslation();
  const { firstName } = useStore($user);
  return (
    <Flex w="100%" justifyContent="space-between">
      <Show breakpoint="(max-width: 1200px)">
        <SidebarDrawer />
      </Show>
      <Heading>
        {t("Привет")} {firstName} 👋
      </Heading>
      <Show breakpoint="(max-width: 1200px)">
        <ProfileDrawer />
      </Show>
    </Flex>
  );
};

export { Header };
