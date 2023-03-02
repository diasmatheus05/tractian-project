import { Layout } from "antd";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";
import { useDataContext } from "./contexts/dataContext";
import { usePagination } from "./hooks/usePagination";

import { Routes } from "./router/routes";

export default function App() {
  const { siderOptions, onClickSider } = useDataContext();

  const { getPageName } = usePagination();

  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Sider
          options={siderOptions}
          onClick={onClickSider}
          independentMenus={["Dashboard"].includes(getPageName())}
        />
        <Layout>
          <Header />
          <Content>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
