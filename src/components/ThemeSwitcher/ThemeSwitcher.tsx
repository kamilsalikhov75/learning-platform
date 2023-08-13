import { useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button/Button";
interface ThemeSwitcherProps {
  width?: string;
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  const { width } = props;

  return (
    <Button onClick={toggleColorMode} width={width}>
      {t("Сменить тему")}
    </Button>
  );
};

export { ThemeSwitcher };
