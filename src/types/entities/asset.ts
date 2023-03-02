import { AssetState } from "../general";

type Model = "motor" | "fan";

export interface Asset {
  assignedUserIds: number[];
  companyId: number;
  unitId: number;
  id: number;
  healthHistory: {
    status: AssetState;
    timestamp: Date;
  }[];
  healthscore: number;
  image: string;
  metrics: {
    lastUptimeAt: Date;
    totalCollectsUptime: number;
    totalUptime: number;
  };
  model: Model;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp: number | null;
    power: number | null;
    rpm: number | null;
  };
  status: AssetState;
}
