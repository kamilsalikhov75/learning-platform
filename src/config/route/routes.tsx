import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { MainPage } from "@/pages/MainPage/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage";
import { RoadmapsPage } from "@/pages/RoadmapsPage/RoadmapsPage";
import { HouseIcon, ProfileIcon, RoadIcon } from "@/shared/ui/icons";
import { useTranslation } from "react-i18next";

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
  Roadmaps = "/roadmaps",
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
      modes: [RouteMode.Default],
    },
    {
      path: Path.Register,
      title: t("Регистрация"),
      element: <RegisterPage />,
      modes: [RouteMode.Default],
    },
    {
      path: Path.Roadmaps,
      title: t("Роадмапы"),
      element: <RoadmapsPage />,
      icon: <RoadIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
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
