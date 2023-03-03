import { Col, ConfigProvider, List, Row, Typography } from "antd";
import { AssetCard, Breadcrumb } from "../";
import { LayoutDetailsProps } from "./types";

const { Title, Text } = Typography;

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

        <Title style={{ marginTop: 16, marginBottom: 24 }}>
          <b>{type}:</b> {name}
        </Title>

        {lists?.length > 0 && (
          <Row gutter={24} style={{ margin: 0 }}>
            <Col span={12} style={{ paddingLeft: 0 }}>
              <List
                header={
                  <Title level={3}>
                    {lists[0].list.length} {lists[0].name}
                  </Title>
                }
                bordered
                dataSource={lists[0].list}
                renderItem={(item) => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Col>
            {lists.length > 1 && (
              <Col span={12} style={{ paddingRight: 0 }}>
                <List
                  header={
                    <Title level={3}>
                      {lists[0].list.length} {lists[1].name}
                    </Title>
                  }
                  bordered
                  dataSource={lists[1].list}
                  renderItem={(item) => (
                    <List.Item>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Col>
            )}
          </Row>
        )}

        {!asset && (
          <List
            header={<Title level={3}>{assetsList?.length} ativos</Title>}
            style={{ marginTop: 24 }}
            grid={{ gutter: 16, column: 3 }}
            bordered
            dataSource={assetsList}
            renderItem={(item) => (
              <List.Item>
                <AssetCard
                  name={item.name}
                  imageUrl={item.image}
                  healthscore={item.healthscore}
                  maxTemp={item.specifications.maxTemp}
                  power={item.specifications.power}
                  rpm={item.specifications.rpm}
                  model={item.model}
                  sensors={item.sensors}
                  status={item.status}
                  lastUptime={item.metrics.lastUptimeAt}
                  totalCollectsUptime={item.metrics.totalCollectsUptime}
                  totalUptime={item.metrics.totalUptime}
                />
              </List.Item>
            )}
          />
        )}

        {asset && (
          <div style={{ width: "50%", marginInline: "auto" }}>
            <AssetCard
              name={asset.name}
              imageUrl={asset.image}
              healthscore={asset.healthscore}
              maxTemp={asset.specifications.maxTemp}
              power={asset.specifications.power}
              rpm={asset.specifications.rpm}
              model={asset.model}
              sensors={asset.sensors}
              status={asset.status}
              lastUptime={asset.metrics.lastUptimeAt}
              totalCollectsUptime={asset.metrics.totalCollectsUptime}
              totalUptime={asset.metrics.totalUptime}
            />
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
