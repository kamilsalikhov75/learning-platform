import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button bg="purple.800" borderRadius="17px" onClick={toggle}>
      {t("Сменить язык")}
    </Button>
  );
};

export { LangSwitcher };
