import { Button, Layout, Typography } from "antd";
import { usePagination } from "../../hooks/usePagination";
import { headerStyle, textStyle } from "./styles";

const { Header: AntDHeader } = Layout;
const { Title } = Typography;

export function Header() {
  const { togglePage, getLinkText, getPageName } = usePagination();

  return (
    <AntDHeader style={headerStyle}>
      <Title level={3}>{getPageName()}</Title>
      <Button type="link" href={togglePage()} style={textStyle}>
        Ver {getLinkText()}
      </Button>
    </AntDHeader>
  );
}
