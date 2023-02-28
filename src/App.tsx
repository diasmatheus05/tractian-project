import { Layout } from "antd";

import { Header } from "./components/Header";
import { Sider } from "./components/Sider";
import { Dashboard } from "./pages/Dashboard";
import { options } from "./provider/siderProvider";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#EEF6FF",
};

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Layout style={{ height: "100%" }}>
        <Sider options={options} />
        <Layout>
          <Header />
          <Content style={contentStyle}>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
