import { IconButton, Switch, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared/ui/Button/Button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
interface ThemeSwitcherProps {
  width?: string;
  type?: "button" | "switch" | "icon";
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { t } = useTranslation();
  const { width, type = "button" } = props;
  switch (type) {
    case "button":
      return (
        <Button onClick={toggleColorMode} width={width}>
          {t("Сменить тему")}
        </Button>
      );
    case "switch":
      return <Switch onChange={toggleColorMode} width={width} />;
    case "icon":
      return (
        <IconButton
          isRound={true}
          aria-label={t("Сменить тему")}
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          width={width}
        />
      );
  }
};

export { ThemeSwitcher };
