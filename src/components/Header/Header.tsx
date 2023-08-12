import { Box, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const userName = "Kamil";
  return (
    <Box bg="white" color="black.800" w="100%">
      <Heading>
        {t("Привет")} {userName} 👋
      </Heading>
    </Box>
  );
};

export { Header };
