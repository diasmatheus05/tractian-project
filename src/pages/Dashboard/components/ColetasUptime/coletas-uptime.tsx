import { Timeline } from "../../../../components/Timeline";
import { ColetasUptimeProps } from "./types";

export function ColetasUptime({ chartSize, data }: ColetasUptimeProps) {
  return (
    <Timeline
      chartSize={chartSize}
      data={data.map((d) => ({ ...d, color: "#1D3A8A" }))}
      labelFormat='<span style="color:{point.color}">● </span><span style="font-weight: bold;" >{point.x:%d %b %Y}</span><br />{point.label}'
    />
  );
}
