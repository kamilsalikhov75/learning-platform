import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./pages/App";
import "./assets/styles/index.scss";
import "./config/i18next/i18next";
import { theme } from "./assets/theme/theme";
import { BrowserRouter } from "react-router-dom";
// import { NotificationProvider } from "./pages/NotificationProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <NotificationProvider> */}
          <App />
        {/* </NotificationProvider> */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
