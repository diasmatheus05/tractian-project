export interface WorkOrders {
  assetId: number;
  assignedUserIds: number[];
  checklist: { completed: boolean; task: string }[];
  description: string;
  id: number;
  priority: "high";
  status: "completed" | "in progress";
  title: string;
}
