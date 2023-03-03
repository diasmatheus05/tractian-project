import { ConfigProvider, Typography } from "antd";

import { boxStyle } from "./styles";
import { BoxProps } from "./types";

const { Title } = Typography;

export function Box({ title, children, id }: BoxProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#000",
        },
      }}
    >
      <div style={boxStyle}>
        <Title level={4} style={{ marginBottom: 16 }}>
          {title}
        </Title>
        <div id={id} style={{ height: "100%" }}>
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}
