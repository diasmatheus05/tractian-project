import { SiderOption } from "../../types";

export interface SiderProps {
  options: SiderOption[];
  independentMenus: boolean;
  onClick: (...path: string[]) => void;
}
