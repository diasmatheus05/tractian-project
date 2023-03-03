import { Layout, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { usePagination } from "../../hooks";
import { headerStyle, textStyle } from "./styles";

const { Header: AntDHeader } = Layout;
const { Title } = Typography;

export function Header() {
  const { pathname } = useLocation();
  const { togglePage, getLinkText, getPageName } = usePagination(pathname);

  return (
    <AntDHeader style={headerStyle}>
      <Title level={3}>{getPageName()}</Title>
      <Link to={togglePage()} style={textStyle}>
        Ver {getLinkText()}
      </Link>
    </AntDHeader>
  );
}
