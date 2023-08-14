import {
  Avatar,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface ProfileSidebarProps {
  width?: string;
}

const ProfileSidebar: FC<ProfileSidebarProps> = (props) => {
  const { t } = useTranslation();
  const { width = "350px" } = props;

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
  );
};
export { ProfileSidebar };
