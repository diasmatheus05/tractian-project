import { Layout } from "antd";
import { useLocation } from "react-router-dom";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";
import { useDataContext } from "./contexts";
import { usePagination } from "./hooks";
import { options } from "./provider";

import { MyRoutes } from "./router/routes";

export default function App() {
  const { data, onClickSider } = useDataContext();

  const { pathname } = useLocation();
  const { getPageName } = usePagination(pathname);

  const siderOptions = data
    ? options(
        data.companies,
        data.units,
        data.users,
        getPageName() === "Detalhes" ? data.assets : undefined
      )
    : [];

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
            <MyRoutes />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
