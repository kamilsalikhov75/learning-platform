import { useTranslation } from "react-i18next";
import "./App.scss";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Flex } from "@chakra-ui/react";
import { useRoutes } from "../config/route/routes";
import { ProfileSidebar } from "../components/ProfileSidebar/ProfileSidebar";

const langs = ["ru", "en"];
function App() {
  const { i18n } = useTranslation();
  const { routes } = useRoutes();
  
  useEffect(() => {
    if (!langs.includes(i18n.language)) {
      i18n.changeLanguage("ru");
    }
  }, [i18n]);

  return (
    <Suspense fallback="">
      <Flex width="100%">
        <Sidebar />
        <Flex
          padding="25px"
          w={{ base: "100%", xl: "calc(100% - 500px)" }}
          flexDirection="column"
          overflowY="auto"
          height="100vh"
        >
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Flex>
        <ProfileSidebar />
      </Flex>
    </Suspense>
  );
}

export default App;
