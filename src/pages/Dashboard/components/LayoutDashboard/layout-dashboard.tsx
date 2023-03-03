import { Col, Row } from "antd";

import { Box } from "../";
import { LayoutDashboardProps } from "./types";

export function LayoutDashboard({ box1, box2, box3 }: LayoutDashboardProps) {
  return (
    <Row
      gutter={24}
      style={{ padding: "24px 12px", height: "100%", margin: 0 }}
    >
      <Col span={16}>
        <Row gutter={[24, 24]} style={{ height: "100%" }}>
          <Col span={24}>
            <Box id={box1.id} title={box1.title}>
              {box1.content}
            </Box>
          </Col>
          <Col span={24}>
            <Box id={box2.id} title={box2.title}>
              {box2.content}
            </Box>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Box id={box3.id} title={box3.title}>
          {box3.content}
        </Box>
      </Col>
    </Row>
  );
}
