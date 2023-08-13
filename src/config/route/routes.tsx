import { MainPage } from "../../pages/MainPage/MainPage";
import { SettingPage } from "../../pages/SettingPage/SettingPage";
import { useTranslation } from "react-i18next";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProfileIcon } from "../../components/ui/icons/ProfileIcon";
import { GearIcon } from "../../components/ui/icons/GearIcon";
import { HouseIcon } from "../../components/ui/icons/HouseIcon";

export const useRoutes = () => {
  const { t } = useTranslation();
  const routes = [
    {
      path: "/",
      title: t("Главная"),
      element: <MainPage />,
      icon: <HouseIcon />,
    },
    {
      path: "/profile",
      title: t("Профиль"),
      element: <ProfilePage />,
      icon: <ProfileIcon />,
    },
    {
      path: "/setting",
      title: t("Настройки"),
      element: <SettingPage />,
      icon: <GearIcon />,
    },
  ];

  return { routes };
};
