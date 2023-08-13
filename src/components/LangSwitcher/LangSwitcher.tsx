import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button/Button";

interface LangSwitcherProps {
  width?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { width } = props;

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button borderRadius="17px" onClick={toggle} width={width}>
      {t("Сменить язык")}
    </Button>
  );
};

export { LangSwitcher };
