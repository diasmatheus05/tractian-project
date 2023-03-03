import {
  ApartmentOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Asset, Company, SiderOption, Unit, User } from "../types";

export const options = (
  companies: Company[],
  units: Unit[],
  users: User[],
  assets?: Asset[]
): SiderOption[] => {
  const array: SiderOption[] = [
    {
      label: "Empresas",
      Icon: <ApartmentOutlined />,
      options: companies.map((company) => ({
        label: company.name,
        id: company.id,
      })),
      multiple: true,
    },
    {
      label: "Unidades",
      Icon: <AppstoreAddOutlined />,
      options: units.map((unit) => ({ label: unit.name, id: unit.id })),
      multiple: true,
    },
    {
      label: "Colaboradores",
      Icon: <UserOutlined />,
      options: users.map((user) => ({ label: user.name, id: user.id })),
      multiple: true,
    },
  ];

  assets &&
    array.push({
      label: "Ativos",
      Icon: <SettingOutlined />,
      options: assets.map((asset) => ({ label: asset.name, id: asset.id })),
    });

  return array;
};
