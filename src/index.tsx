import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DataContextProvider } from "./contexts/dataContext";
import { theme } from "./theme/theme";

import "antd/dist/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
