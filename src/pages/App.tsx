import { useTranslation } from "react-i18next";
import "./App.scss";
import { Suspense, useEffect } from "react";

const langs = ["ru", "en"];
function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (!langs.includes(i18n.language)) {
      i18n.changeLanguage("ru");
    }
  }, []);
  return (
    <Suspense fallback="">
      <h1>{t("Привет")}</h1>
    </Suspense>
  );
}

export default App;
