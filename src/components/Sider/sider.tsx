import { Divider, Layout, Menu } from "antd";

import { TractianLogo } from "../../assets/logo";
import { menuStyle, siderStyle } from "./styles";
import { SiderProps } from "./types";

const { Sider: AntDSider } = Layout;

export function Sider({ options }: SiderProps) {
  return (
    <AntDSider width={240} style={siderStyle}>
      <TractianLogo />
      <Divider />

      {options.map((option) => {
        const { Icon } = option;
        return (
          <Menu
            mode="inline"
            style={menuStyle}
            defaultOpenKeys={[option.label]}
            defaultSelectedKeys={[option.options[0].label]}
            multiple={option.multiple}
            items={[
              {
                key: option.label,
                icon: Icon,
                label: option.label,
                children: option.options.map((child) => ({
                  key: child.label,
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
