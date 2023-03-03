import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Col,
  ConfigProvider,
  List as AntDList,
  Row,
  Tooltip,
  Typography,
} from "antd";
import { AssetCard, Breadcrumb, List, ListHeader } from "../";
import { LayoutDetailsProps } from "./types";

const { Title } = Typography;

export function LayoutDetails({
  type,
  name,
  breadcrumb,
  lists,
  assetsList,
  asset,
}: LayoutDetailsProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#000",
        },
      }}
    >
      <div
        style={{
          padding: 24,
          maxHeight: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Breadcrumb {...breadcrumb} />

        <Row style={{ justifyContent: "space-between" }}>
          <Title style={{ marginTop: 16, marginBottom: 24 }}>
            <b>{type}:</b> {name}
          </Title>
          <div>
            <Tooltip title="Editar">
              <EditOutlined
                style={{ fontSize: 32, cursor: "pointer", marginRight: 16 }}
              />
            </Tooltip>
            <Tooltip title="Deletar">
              <DeleteOutlined
                style={{
                  fontSize: 32,
                  cursor: "pointer",
                  marginRight: 8,
                  color: "#FD2223",
                }}
              />
            </Tooltip>
          </div>
        </Row>

        {lists?.length > 0 && (
          <Row gutter={24} style={{ margin: 0 }}>
            <Col span={12} style={{ paddingLeft: 0 }}>
              <List name={lists[0].name} list={lists[0].list} />
            </Col>
            {lists.length > 1 && (
              <Col span={12} style={{ paddingRight: 0 }}>
                <List name={lists[1].name} list={lists[1].list} />
              </Col>
            )}
          </Row>
        )}

        {!asset && (
          <AntDList
            header={<ListHeader quantity={assetsList?.length} name="ativos" />}
            style={{ marginTop: 24 }}
            grid={{ gutter: 16, column: 3 }}
            bordered
            dataSource={assetsList}
            renderItem={(item) => (
              <AntDList.Item>
                <AssetCard {...item} />
              </AntDList.Item>
            )}
          />
        )}

        {asset && (
          <div style={{ width: "50%", marginInline: "auto" }}>
            <AssetCard {...asset} />
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
