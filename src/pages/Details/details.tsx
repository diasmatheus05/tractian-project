import { Card, Col, ConfigProvider, List, Row, Typography } from "antd";
import { Breadcrumb } from "./components";

const { Title, Text } = Typography;

export function Details() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#000",
        },
      }}
    >
      <div style={{ padding: 24, maxHeight: "100%", overflow: "scroll" }}>
        <Breadcrumb
          company="The Test Company"
          unit="Jaguar"
          user="John Doe"
          asset="Máquina 1"
        />

        <Title style={{ marginTop: 16, marginBottom: 24 }}>
          <b>Empresa:</b> The Test Company
        </Title>

        <Row gutter={24} style={{ margin: 0 }}>
          <Col span={12} style={{ paddingLeft: 0 }}>
            <List
              header={<Title level={3}>2 unidades</Title>}
              bordered
              dataSource={["Jaguar Unit", "Tobias Unit"]}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Col>
          <Col span={12} style={{ paddingRight: 0 }}>
            <List
              header={<Title level={3}>2 unidades</Title>}
              bordered
              dataSource={[
                "Jaguar Unit",
                "Tobias Unit",
                "Jaguar Unit",
                "Tobias Unit",
                "Jaguar Unit",
                "Tobias Unit",
                "Jaguar Unit",
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <List
          style={{ marginTop: 24 }}
          grid={{ gutter: 16, column: 3 }}
          dataSource={[
            "Jaguar Unit",
            "Tobias Unit",
            "Jaguar Unit",
            "Tobias Unit",
            "Jaguar Unit",
            "Tobias Unit",
          ]}
          renderItem={(item) => (
            <List.Item>
              <Card title={item}>Card content</Card>
            </List.Item>
          )}
        />
      </div>
    </ConfigProvider>
  );
}
