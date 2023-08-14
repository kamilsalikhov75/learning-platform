import { MainPage } from "../../pages/MainPage/MainPage";
import { SettingPage } from "../../pages/SettingPage/SettingPage";
import { useTranslation } from "react-i18next";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProfileIcon } from "../../components/ui/icons/ProfileIcon";
import { GearIcon } from "../../components/ui/icons/GearIcon";
import { HouseIcon } from "../../components/ui/icons/HouseIcon";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";

interface UseRoutesArgs {
  mode?: RouteMode;
}

interface Route {
  path: string;
  title: string;
  element: JSX.Element;
  icon?: JSX.Element;
  modes: RouteMode[];
}

export enum RouteMode {
  Default = "default",
  Sidebar = "sidebar",
}

type UseRoutes = (args: UseRoutesArgs) => { routes: Route[] };

export const useRoutes: UseRoutes = ({ mode = RouteMode.Default }) => {
  const { t } = useTranslation();
  const routes = [
    {
      path: "/",
      title: t("Главная"),
      element: <MainPage />,
      icon: <HouseIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
    },
    {
      path: "/profile",
      title: t("Профиль"),
      element: <ProfilePage />,
      icon: <ProfileIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
    },
    {
      path: "/setting",
      title: t("Настройки"),
      element: <SettingPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
    },
    {
      path: "/login",
      title: t("Авторизация"),
      element: <LoginPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default],
    },
    {
      path: "/register",
      title: t("Регистрация"),
      element: <RegisterPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default],
    },
  ];

  const filtredRoutes = routes.filter((route) => route.modes.includes(mode));

  return { routes: filtredRoutes };
};
