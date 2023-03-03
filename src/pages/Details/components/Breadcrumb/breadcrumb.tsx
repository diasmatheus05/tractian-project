import { Breadcrumb as AntdBreadcrumb } from "antd";
import { BreadcrumbProps } from "./types";

export function Breadcrumb({ company, unit, user, asset }: BreadcrumbProps) {
  return (
    <AntdBreadcrumb>
      <AntdBreadcrumb.Item>{company}</AntdBreadcrumb.Item>
      <AntdBreadcrumb.Item>{unit}</AntdBreadcrumb.Item>
      {user && <AntdBreadcrumb.Item>{user}</AntdBreadcrumb.Item>}
      {asset && <AntdBreadcrumb.Item>{asset}</AntdBreadcrumb.Item>}
    </AntdBreadcrumb>
  );
}
