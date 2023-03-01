import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { HealthscoreProps } from "./types";

function getColumnColor(value: number) {
  if (value < 40) return "#FD2223";
  else if (value > 40 && value < 70) return "#FE8F09";
  else return "#1D3A8A";
}

export function Healthscore({ chartSize, data }: HealthscoreProps) {
  const options: Highcharts.Options = {
    chart: {
      ...chartSize,
    },
    title: {
      text: undefined,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: data.map((d) => d.name), // ["Máquina 1", "Máquina 2", "Máquina 3"],
      title: {
        text: "Ativos",
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Healthscore (%)",
      },
    },
    series: [
      {
        data: data.map((d) => ({
          y: d.value,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, getColumnColor(d.value)],
              [1, "#2562EA"],
            ],
          },
        })),
        type: "column",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
