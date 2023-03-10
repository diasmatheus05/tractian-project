import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DataContextProvider } from "./contexts";
import { theme } from "./theme/theme";

import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
