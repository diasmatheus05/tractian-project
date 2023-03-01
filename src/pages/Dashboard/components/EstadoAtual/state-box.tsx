import { Typography } from "antd";
import { stateBoxStyle } from "./styles";
import { StateBoxProps } from "./types";

const { Title } = Typography;

export function StateBox({ state, number, type }: StateBoxProps) {
  return (
    <div style={stateBoxStyle}>
      <Title type={type} level={4}>
        {state}
      </Title>
      <Title level={2}>{number}</Title>
    </div>
  );
}
