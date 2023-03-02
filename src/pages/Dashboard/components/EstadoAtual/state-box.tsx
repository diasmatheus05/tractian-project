import { Typography } from "antd";
import { StateBoxProps } from "../../../../types";
import { stateBoxStyle } from "./styles";

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
