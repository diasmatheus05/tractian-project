import { Asset } from "./entities/asset";
import { Company } from "./entities/company";
import { User } from "./entities/unit";
import { Unit } from "./entities/user";
import { WorkOrders } from "./entities/workorders";

export type State = "Em Alerta" | "Em Operação" | "Em Parada";
export type AssetState = "inOperation" | "inDowntime" | "inAlert";

export type TextType = "warning" | "success" | "danger";

export type SiderLabelOptions = "Empresas" | "Unidades" | "Colaboradores";
export type SiderLabelOptionsWithAssets =
  | "Empresas"
  | "Unidades"
  | "Colaboradores"
  | "Ativos";

export type SiderOption = {
  label: SiderLabelOptionsWithAssets;
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
  workorders: WorkOrders[];
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

export interface IContextDetailsData {
  type: "Empresa" | "Unidade" | "Colaborador" | "Ativo";
  name: string;
  breadcrumb: {
    company: string | undefined;
    unit: string | undefined;
    user: string | undefined;
    asset: string | undefined;
  };
  lists: {
    name: "unidades" | "colaboradores";
    list: string[];
  }[];
  assetsList: Asset[];
  asset?: Asset;
  workorders?: WorkOrders[];
}
