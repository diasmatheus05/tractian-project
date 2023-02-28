import { Col, Row } from "antd";

const style: React.CSSProperties = {
  background: "#FFF",
  borderRadius: 8,
  height: "100%",
};

export function Dashboard() {
  return (
    <Row gutter={24} style={{ padding: 24, height: "100%" }}>
      <Col span={16}>
        <Row gutter={[24, 24]} style={{ height: "100%" }}>
          <Col span={24}>
            <div style={style}></div>
          </Col>
          <Col span={24}>
            <div style={style}></div>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <div style={style}></div>
      </Col>
    </Row>
  );
}
