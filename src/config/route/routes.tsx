import { Role } from "@/features/role";
import { AdminPage } from "@/pages/AdminPage/AdminPage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { MainPage } from "@/pages/MainPage/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage";
import { RoadmapsPage } from "@/pages/RoadmapsPage/RoadmapsPage";
import { GearIcon, HouseIcon, ProfileIcon, RoadIcon } from "@/shared/ui/icons";
import { useTranslation } from "react-i18next";

interface UseRoutesArgs {
  mode?: RouteMode;
  role?: Role;
}

interface Route {
  path: Path;
  title?: string;
  element: JSX.Element;
  icon?: JSX.Element;
  modes: RouteMode[];
  roles?: Role[];
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
  Admin = "/admin",
  NotFound = "*",
}

export const paths = Object.values(Path);

type UseRoutes = (args: UseRoutesArgs) => { routes: Route[] };

export const useRoutes: UseRoutes = ({
  mode = RouteMode.Default,
  role = null,
}) => {
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
      path: Path.Admin,
      title: t("Администрирование"),
      element: <AdminPage />,
      icon: <GearIcon />,
      modes: [RouteMode.Default, RouteMode.Sidebar],
      roles: [Role.Admin],
    },
    {
      path: Path.NotFound,
      element: <NotFoundPage />,
      modes: [RouteMode.Default],
    },
  ];

  const filtredRoutes = routes.filter((route) => route.modes.includes(mode));

  if (!role) {
    return { routes: filtredRoutes };
  }

  return {
    routes: filtredRoutes.filter((route) => {
      if (route.roles) {
        return route.roles?.includes(role);
      }
      return true;
    }),
  };
};
