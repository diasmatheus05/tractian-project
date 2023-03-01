import { EstadoAtual, LayoutDashboard } from "./components";

import { states } from "../../provider/estadoAtualProvider";

export function Dashboard() {
  return (
    <LayoutDashboard
      box1={{
        title: "Estado Atual",
        content: <EstadoAtual states={states} />,
      }}
      box2={{
        title: "Healthscores",
        content: <></>,
      }}
      box3={{
        title: "Coletas Uptime",
        content: <></>,
      }}
    />
  );
}
