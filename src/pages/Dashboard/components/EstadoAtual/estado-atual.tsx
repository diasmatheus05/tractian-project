import { Col, Row } from "antd";
import { StateBox } from "./state-box";
import { EstadoAtualProps } from "./types";

export function EstadoAtual({ states }: EstadoAtualProps) {
  return (
    <Row gutter={24}>
      {states.map((state, index) => {
        return (
          <Col
            key={state + "-" + index}
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <StateBox
              state={state.state}
              number={state.number}
              type={state.type}
            />
          </Col>
        );
      })}
    </Row>
  );
}
