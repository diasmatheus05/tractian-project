import { Layout } from "antd";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";
import { useDataContext } from "./contexts/dataContext";

import { Dashboard } from "./pages/Dashboard";

export default function App() {
  const { siderOptions, onClickSider } = useDataContext();

  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Sider options={siderOptions} onClick={onClickSider} />
        <Layout>
          <Header page="Dashboard" />
          <Content>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
