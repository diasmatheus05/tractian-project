import { Layout } from "antd";
import { PropsWithChildren } from "react";

const { Content: AntDContent } = Layout;

const contentStyle: React.CSSProperties = {
  backgroundColor: "#EEF6FF",
};

export function Content({ children }: PropsWithChildren) {
  return <AntDContent style={contentStyle}>{children}</AntDContent>;
}
