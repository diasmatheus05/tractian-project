import { CloseCircleOutlined } from "@ant-design/icons";
import { List as AntDList, Tooltip, Typography } from "antd";
import { ListHeader } from "./list-header";

const { Text } = Typography;

export function List({ name, list }: { name: string; list: string[] }) {
  return (
    <AntDList
      header={<ListHeader quantity={list.length} name={name} />}
      bordered
      dataSource={list}
      renderItem={(item) => (
        <AntDList.Item>
          <Text>{item}</Text>
          <Tooltip title="Remover">
            <CloseCircleOutlined
              style={{
                fontSize: 24,
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </AntDList.Item>
      )}
    />
  );
}
