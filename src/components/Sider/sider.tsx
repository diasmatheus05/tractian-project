import { Divider, Layout, Menu } from "antd";

import { TractianLogo } from "../../assets/logo";
import { menuStyle, siderStyle } from "./styles";
import { SiderProps } from "./types";

const { Sider: AntDSider } = Layout;

export function Sider({ options, independentMenus, onClick }: SiderProps) {
  return (
    <AntDSider width={240} style={siderStyle}>
      <TractianLogo />
      <Divider />

      {independentMenus ? (
        options.map((option) => {
          const { Icon } = option;
          return (
            <Menu
              key={option.label}
              mode="inline"
              style={menuStyle}
              defaultOpenKeys={[option.label]}
              defaultSelectedKeys={[String(option.options[0].id)]}
              multiple={option.multiple}
              onClick={(e) => onClick(...e.keyPath)}
              items={[
                {
                  key: option.label,
                  icon: Icon,
                  label: option.label,
                  children: option.options.map((child) => ({
                    key: child.id,
                    label: child.label,
                  })),
                },
              ]}
            />
          );
        })
      ) : (
        <Menu
          mode="inline"
          style={menuStyle}
          // defaultOpenKeys={options.map((o) => o.label)}
          defaultOpenKeys={["Empresas", "Unidades", "Colaboradores"]}
          defaultSelectedKeys={["1-0"]}
          onClick={(e) => onClick(...e.keyPath)}
          items={options.map((option, index) => {
            const { Icon } = option;
            return {
              key: option.label,
              icon: Icon,
              label: option.label,
              children: option.options.map((child) => ({
                key: child.id + "-" + index,
                label: child.label,
              })),
            };
          })}
        />
      )}
    </AntDSider>
  );
}
