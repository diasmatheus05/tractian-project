export interface ColetasUptimeProps {
  chartSize: {
    width: number;
    height: number;
  };
  data: {
    name: string;
    value: number;
  }[];
}
