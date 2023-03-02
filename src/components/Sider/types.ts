import { SiderOption } from "../../types";

export interface SiderProps {
  options: SiderOption[];
  onClick: (...path: string[]) => void;
}
