import {
  ApartmentOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const options = [
  {
    label: "Empresas",
    Icon: <ApartmentOutlined />,
    options: [{ label: "Empresa 1" }, { label: "Empresa 2" }],
  },
  {
    label: "Unidades",
    Icon: <AppstoreAddOutlined />,
    options: [{ label: "Jaguar" }, { label: "Tobias" }],
    multiple: true,
  },
  {
    label: "Colaboradores",
    Icon: <UserOutlined />,
    options: [{ label: "João Silva" }, { label: "Maria" }],
  },
];
