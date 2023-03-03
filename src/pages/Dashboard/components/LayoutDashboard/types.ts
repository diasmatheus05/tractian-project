interface LayoutBoxProps {
  title: string;
  content: React.ReactNode;
  id?: string;
}

export interface LayoutDashboardProps {
  box1: LayoutBoxProps;
  box2: LayoutBoxProps;
  box3: LayoutBoxProps;
}
