import { MainPage } from "../../pages/MainPage/MainPage";
import { useTranslation } from "react-i18next";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProfileIcon } from "../../components/ui/icons/ProfileIcon";
import { GearIcon } from "../../components/ui/icons/GearIcon";
import { HouseIcon } from "../../components/ui/icons/HouseIcon";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

interface UseRoutesArgs {
  mode?: RouteMode;
}

interface Route {
  path: Path;
  title?: string;
  element: JSX.Element;
  icon?: JSX.Element;
  modes: RouteMode[];
}

export enum RouteMode {
  Default = "default",
  Sidebar = "sidebar",
}

export enum Path {
  Main = "/",
  Profile = "/profile",
  Login = "/login",
  Register = "/register",
  NotFound = "*",
}

export const paths = Object.values(Path);

type UseRoutes = (args: UseRoutesArgs) => { routes: Route[] };

export const useRoutes: UseRoutes = ({ mode = RouteMode.Default }) => {
  const { t } = useTranslation();
  const routes = [
    {
      path: Path.Main,
      title: t("Главная"),
      element: <MainPage />,
      icon: <HouseIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
    },
    {
      path: Path.Profile,
      title: t("Профиль"),
      element: <ProfilePage />,
      icon: <ProfileIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
    },
    {
      path: Path.Login,
      title: t("Авторизация"),
      element: <LoginPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default],
    },
    {
      path: Path.Register,
      title: t("Регистрация"),
      element: <RegisterPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default],
    },
    {
      path: Path.NotFound,
      element: <NotFoundPage />,
      modes: [RouteMode.Default],
    },
  ];

  const filtredRoutes = routes.filter((route) => route.modes.includes(mode));

  return { routes: filtredRoutes };
};
