import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import { Path, useRoutes } from "../config/route/routes";
import { useStore } from "effector-react";
import { DashboardLayout } from "../components/Layout/DashboardLayout";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { $user, getMe } from "@/features/user";

const langs = ["ru", "en"];
function App() {
  const { isAuth } = useStore($user);
  const { i18n } = useTranslation();
  const { routes } = useRoutes({});

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getMe();
    }
  }, []);

  useEffect(() => {
    if (!langs.includes(i18n.language)) {
      i18n.changeLanguage("ru");
    }
  }, [i18n]);

  return (
    <DashboardLayout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              isAuth &&
              (route.path === Path.Login || route.path === Path.Register) ? (
                <Navigate to={Path.Main} />
              ) : isAuth ||
                route.path === Path.Login ||
                route.path === Path.Register ? (
                route.element
              ) : (
                <Navigate to={Path.Login} />
              )
            }
          />
        ))}
      </Routes>
    </DashboardLayout>
  );
}

export default App;
