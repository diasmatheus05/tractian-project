import {
  ColetasUptime,
  EstadoAtual,
  Healthscore,
  LayoutDashboard,
} from "./components";

import { useDataContext } from "../../contexts";

export function Dashboard() {
  const { getDashboardData } = useDataContext();
  const { states, coletasUptime, healthscores } = getDashboardData();

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
            data={healthscores}
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
            data={coletasUptime}
          />
        ),
      }}
    />
  );
}
