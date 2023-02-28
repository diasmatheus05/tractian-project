import { Layout, Typography } from "antd";
import { headerStyle } from "./styles";

const { Header: AntDHeader } = Layout;
const { Title } = Typography;

export function Header({ page }: { page: string }) {
  return (
    <AntDHeader style={headerStyle}>
      <Title level={3}>{page}</Title>
    </AntDHeader>
  );
}
