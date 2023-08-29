import {
  Avatar,
  Center,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { GITHUB_LINK, TELEGRAM_LINK } from "../../const/const";
import { useStore } from "effector-react";
import { $user } from "../../effector/user";
import { TelegramIcon } from "../ui/icons/TelegramIcon";
import { GithubIcon } from "../ui/icons/GithubIcon";

interface ProfileSidebarProps {
  width?: string;
}

const ProfileSidebar: FC<ProfileSidebarProps> = (props) => {
  const { width = "300px" } = props;
  const { githubUserName, telegramUserName, userName } = useStore($user);

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
        <Center>
          <Avatar
            size="2xl"
            name={userName}
            src={`${GITHUB_LINK}${githubUserName}.png`}
          />
        </Center>
        <Center gap="20px" marginTop="20px">
          {telegramUserName && (
            <Link href={`${TELEGRAM_LINK}${telegramUserName}`} target="_blank">
              <TelegramIcon />
            </Link>
          )}
          {githubUserName && (
            <Link href={`${GITHUB_LINK}${githubUserName}`} target="_blank">
              <GithubIcon />
            </Link>
          )}
        </Center>
      </Flex>
    </Center>
  );
};
export { ProfileSidebar };
