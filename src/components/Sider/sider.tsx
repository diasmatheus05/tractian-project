import { Divider, Layout, Menu } from "antd";

import { TractianLogo } from "../../assets/logo";
import { menuStyle, siderStyle } from "./styles";
import { SiderProps } from "./types";

const { Sider: AntDSider } = Layout;

export function Sider({ options, onClick }: SiderProps) {
  return (
    <AntDSider width={240} style={siderStyle}>
      <TractianLogo />
      <Divider />

      {options.map((option) => {
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
      })}
    </AntDSider>
  );
}
