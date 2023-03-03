export interface TimelineProps {
  chartSize: {
    width: number;
    height: number;
  };
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  labelFormat: string;
}
