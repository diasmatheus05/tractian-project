import { Layout, Typography } from "antd";

const { Header: AntDHeader } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",

  backgroundColor: "#1D3A8A",

  paddingInline: 50,

  height: 80,
};

export function Header() {
  return (
    <AntDHeader style={headerStyle}>
      <Title level={3}>DASHBOARD</Title>
    </AntDHeader>
  );
}
