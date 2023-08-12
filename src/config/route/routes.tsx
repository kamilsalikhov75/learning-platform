import { SettingsIcon } from "@chakra-ui/icons";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { SettingPage } from "../../pages/SettingPage/SettingPage";
import { useTranslation } from "react-i18next";

export const useRoutes = () => {
  const { t } = useTranslation();
  const routes = [
    {
      path: "/",
      title: t("Главная"),
      element: <MainPage />,
    },
    {
      path: "/about",
      title: t("О сервисе"),
      element: <AboutPage />,
    },
    {
      path: "/setting",
      title: t("Настройки"),
      element: <SettingPage />,
      icon: <SettingsIcon />,
    },
  ];

  return { routes };
};
