import { Layout } from "antd";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Sider } from "./components/Sider";

import { Dashboard } from "./pages/Dashboard";
import { options } from "./provider/siderProvider";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Sider options={options} />
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
