import { Asset } from "../../../../types";
import { BreadcrumbProps } from "../Breadcrumb";

export interface LayoutDetailsProps {
  type: "Empresa" | "Unidade" | "Colaborador" | "Ativo";
  name: string;
  breadcrumb: BreadcrumbProps;
  lists: { name: "unidades" | "colaboradores"; list: string[] }[];
  assetsList: Asset[];
  asset?: Asset;
}
