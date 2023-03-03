import { PlusCircleOutlined } from "@ant-design/icons";
import { Tooltip, Typography } from "antd";

const { Title } = Typography;

export function ListHeader({
  quantity,
  name,
}: {
  quantity: number;
  name: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Title level={3}>
        {quantity} {name}
      </Title>
      <Tooltip title="Adicionar">
        <PlusCircleOutlined style={{ fontSize: 24, cursor: "pointer" }} />
      </Tooltip>
    </div>
  );
}
