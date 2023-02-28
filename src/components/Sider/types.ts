export type Option = {
  label: string;
  Icon: JSX.Element;
  options: { label: string }[];
  multiple?: boolean;
};

export interface SiderProps {
  options: Option[];
}
