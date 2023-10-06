import {
  Avatar,
  Center,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { GITHUB_LINK, TELEGRAM_LINK } from "../../const/const";
import { useStore } from "effector-react";
import { $user } from "../../effector/user";
import { TelegramIcon } from "../../shared/ui/icons/TelegramIcon";
import { GithubIcon } from "../../shared/ui/icons/GithubIcon";

interface ProfileSidebarProps {
  width?: string;
}

const ProfileSidebar: FC<ProfileSidebarProps> = (props) => {
  const { width = "300px" } = props;
  const { github, telegram, firstName, lastName } = useStore($user);

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
            name={firstName}
            src={github ? `${GITHUB_LINK}${github}.png` : undefined}
          />
        </Center>
        <Center>
          <Heading
            textAlign="center"
            size="lg"
          >{`${lastName} ${firstName}`}</Heading>
        </Center>
        <Center gap="20px" marginTop="20px">
          {telegram && (
            <Link href={`${TELEGRAM_LINK}${telegram}`} target="_blank">
              <TelegramIcon />
            </Link>
          )}
          {github && (
            <Link href={`${GITHUB_LINK}${github}`} target="_blank">
              <GithubIcon />
            </Link>
          )}
        </Center>
      </Flex>
    </Center>
  );
};
export { ProfileSidebar };
