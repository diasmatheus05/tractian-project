import {
  ColetasUptime,
  EstadoAtual,
  Healthscore,
  LayoutDashboard,
} from "./components";

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
        content: (
          <Healthscore
            chartSize={{
              width: 728,
              height: 376,
            }}
            data={[
              { name: "Maquina 1", value: 80 },
              { name: "Maquina 2", value: 50 },
              { name: "Maquina 3", value: 30 },
            ]}
          />
        ),
      }}
      box3={{
        title: "Coletas Uptime",
        content: (
          <ColetasUptime
            chartSize={{
              width: 336,
              height: 592,
            }}
            data={[
              { name: "Maquina 1", value: Date.UTC(1952, 5, 22) },
              { name: "Maquina 2", value: Date.UTC(1951, 7, 22) },
              { name: "Maquina 3", value: Date.UTC(1951, 5, 22) },
            ]}
          />
        ),
      }}
    />
  );
}
