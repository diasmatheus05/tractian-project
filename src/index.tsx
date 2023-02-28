import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { theme } from "./theme/theme";

import "antd/dist/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
