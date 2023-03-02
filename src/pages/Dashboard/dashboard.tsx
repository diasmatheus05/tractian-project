import {
  ColetasUptime,
  EstadoAtual,
  Healthscore,
  LayoutDashboard,
} from "./components";

import { useDataContext } from "../../contexts/dataContext";

export function Dashboard() {
  const { getData } = useDataContext();
  const { states, coletasUptime, healthscores } = getData();

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
