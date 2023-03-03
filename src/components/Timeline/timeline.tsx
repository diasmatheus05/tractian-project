import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

import HighchartsExporting from "highcharts/modules/exporting";
import timeline from "highcharts/modules/timeline";

import { TimelineProps } from "./types";

export function Timeline({ chartSize, data, labelFormat }: TimelineProps) {
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
          format: labelFormat,
        },
        data: data.map((d) => ({
          x: d.value,
          name: d.name,
          label: d.name,
          color: d.color,
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
