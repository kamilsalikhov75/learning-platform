import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "@/app/assets/styles/index.scss";
import "./config/i18next/i18next";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
