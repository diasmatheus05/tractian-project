import { Asset } from "./entities/asset";
import { Company } from "./entities/company";
import { User } from "./entities/unit";
import { Unit } from "./entities/user";

export type State = "Em Alerta" | "Em Operação" | "Em Parada";
export type AssetState = "inOperation" | "inDowntime" | "inAlert";

export type TextType = "warning" | "success" | "danger";

export type SiderLabelOptions = "Empresas" | "Unidades" | "Colaboradores";

export type SiderOption = {
  label: SiderLabelOptions;
  Icon: JSX.Element;
  options: { label: string; id: number }[];
  multiple?: boolean;
};

export interface StateBoxProps {
  state: State;
  number: number;
  type: TextType;
}

export interface IContextData {
  users: User[];
  units: Unit[];
  companies: Company[];
  assets: Asset[];
}

export interface IContextDashboardData {
  states: StateBoxProps[];
  healthscores: {
    name: string;
    value: number;
  }[];
  coletasUptime: {
    name: string;
    value: number;
  }[];
}
