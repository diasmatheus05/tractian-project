import { Breadcrumb as AntdBreadcrumb } from "antd";

export function Breadcrumb({
  company,
  unit,
  user,
  asset,
}: {
  company: string;
  unit?: string;
  user?: string;
  asset?: string;
}) {
  return (
    <AntdBreadcrumb>
      <AntdBreadcrumb.Item>{company}</AntdBreadcrumb.Item>
      {unit && <AntdBreadcrumb.Item>{unit}</AntdBreadcrumb.Item>}
      {user && <AntdBreadcrumb.Item>{user}</AntdBreadcrumb.Item>}
      {asset && <AntdBreadcrumb.Item>{asset}</AntdBreadcrumb.Item>}
    </AntdBreadcrumb>
  );
}
