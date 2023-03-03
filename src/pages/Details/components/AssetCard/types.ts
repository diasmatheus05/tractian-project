import { AssetState } from "../../../../types";

export interface AssetCardProps {
  name: string;
  imageUrl: string;
  model: string;
  sensors: string[];
  maxTemp: number | null;
  power: number | null;
  rpm: number | null;
  healthscore: number;
  status: AssetState;
  lastUptime: Date;
  totalCollectsUptime: number;
  totalUptime: number;
}
