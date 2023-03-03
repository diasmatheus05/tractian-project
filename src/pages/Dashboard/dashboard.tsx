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
        id: "healthscore",
        content: (
          <Healthscore
            chartSize={{
              width: document.getElementById("healthscore")?.clientWidth || 728,
              height:
                document.getElementById("healthscore")?.clientHeight || 376,
            }}
            data={healthscores}
          />
        ),
      }}
      box3={{
        title: "Coletas Uptime",
        id: "uptime",
        content: (
          <ColetasUptime
            chartSize={{
              width: document.getElementById("uptime")?.clientWidth || 336,
              height: document.getElementById("uptime")?.clientHeight || 592,
            }}
            data={coletasUptime}
          />
        ),
      }}
    />
  );
}
