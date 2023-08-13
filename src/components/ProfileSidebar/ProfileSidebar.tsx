import { Avatar, Center, Flex, Heading, Show } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProfileSidebar = () => {
  const { t } = useTranslation();
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
        <Flex flexDirection="column" gap="10px" w="100%">
          <Heading size="md" marginBottom='30px'>{t("Профиль")}</Heading>
          <Center>
            <Avatar
              size="2xl"
              name="Kamil Salikhov"
              src="https://bit.ly/dan-abramov"
            />
          </Center>
        </Flex>
      </Center>
    </Show>
  );
};
export { ProfileSidebar };
