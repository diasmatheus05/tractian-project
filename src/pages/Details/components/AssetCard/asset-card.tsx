import { Card, Divider, Tag, Typography } from "antd";
import { format } from "date-fns";
import { currentState } from "../../../../provider";
import { AssetCardProps } from "./types";

const { Text, Title } = Typography;

export function AssetCard({
  name,
  imageUrl,
  model,
  sensors,
  maxTemp,
  power,
  rpm,
  healthscore,
  status,
  lastUptime,
  totalCollectsUptime,
  totalUptime,
}: AssetCardProps) {
  return (
    <Card cover={<img alt={name} src={imageUrl} />}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={4}>{name}</Title>
        <Tag color={currentState[status].type}>
          {currentState[status].state}
        </Tag>
      </div>
      <br />
      <Text>
        <b>Modelo:</b> {model}
      </Text>
      <br />
      <Text>
        <b>Sensores:</b> {sensors.join(", ")}
      </Text>

      <Divider />

      <Text>
        <b>Healthscore:</b> {healthscore}%
      </Text>
      <br />

      <Divider />

      {(maxTemp || power || rpm) && (
        <>
          {maxTemp && (
            <>
              <Text>
                <b>Temperatura Máxima:</b> {maxTemp} °C
              </Text>
              <br />
            </>
          )}
          {(power || power === 0) && (
            <>
              <Text>
                <b>Potência:</b> {power} kWh
              </Text>
              <br />
            </>
          )}
          {rpm && (
            <Text>
              <b>RPM:</b> {rpm}
            </Text>
          )}
          <Divider />
        </>
      )}

      <Text>
        <>
          <b>Última Coleta:</b>{" "}
          {format(new Date(lastUptime), "dd/MM/yy HH:mm:ss")}
        </>
      </Text>
      <br />
      <Text>
        <b>Número de Coletas:</b> {totalUptime}
      </Text>
      <br />
      <Text>
        <b>Horas de Coletas:</b> {totalCollectsUptime} Hs
      </Text>
    </Card>
  );
}
