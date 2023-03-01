import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

import HighchartsExporting from "highcharts/modules/exporting";
import timeline from "highcharts/modules/timeline";
import { ColetasUptimeProps } from "./types";

export function ColetasUptime({ chartSize, data }: ColetasUptimeProps) {
  HighchartsExporting(Highcharts);
  timeline(Highcharts);

  const options: Highcharts.Options = {
    chart: {
      inverted: true,
      ...chartSize,
    },
    title: {
      text: undefined,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        type: "timeline",
        marker: {
          symbol: "circle",
        },
        dataLabels: {
          allowOverlap: false,
          format: `
            <span style="color:{point.color}">● </span>
            <span style="font-weight: bold;" >{point.x:%d %b %Y}</span>
            <br />
            {point.label}
            `,
        },
        data: data.map((d) => ({
          x: d.value,
          name: d.name,
          label: d.name,
          color: "#1D3A8A",
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
