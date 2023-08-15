import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import { useRoutes } from "../config/route/routes";
import { $user } from "../effector/user";
import { useStore } from "effector-react";
import { DashboardLayout } from "../components/Layout/DashboardLayout";
import { useEffect } from "react";

const langs = ["ru", "en"];
function App() {
  const { isAuth } = useStore($user);
  const { i18n } = useTranslation();
  const { routes } = useRoutes({});

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
              (route.path === "/login" || route.path === "/register") ? (
                <Navigate to="/" />
              ) : isAuth ||
                route.path === "/login" ||
                route.path === "/register" ? (
                route.element
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        ))}
      </Routes>
    </DashboardLayout>
  );
}

export default App;
