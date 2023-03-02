import {
  ApartmentOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Company, SiderOption, Unit, User } from "../types";

export const options = (
  companies: Company[],
  units: Unit[],
  users: User[]
): SiderOption[] => [
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
