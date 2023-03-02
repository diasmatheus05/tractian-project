import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { states } from "../provider/estadoAtualProvider";
import { options } from "../provider/siderProvider";
import { getAssets } from "../services/assets";
import { getCompanies } from "../services/companies";
import { getUnits } from "../services/units";
import { getUsers } from "../services/users";
import {
  Asset,
  IContextDashboardData,
  IContextData,
  SiderLabelOptions,
  SiderOption,
} from "../types";

interface DataContextProviderProps {
  children: React.ReactNode;
}

interface DataContextProps {
  siderOptions: SiderOption[];
  getData: () => IContextDashboardData;
  onClickSider: (option: string, group: string) => void;
}

const DataContext = createContext({} as DataContextProps);

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [siderOptions, setSiderOptions] = useState<SiderOption[]>([]);
  const [filter, setFilter] = useState<{
    companies: string[];
    units: string[];
    users: string[];
  }>({
    companies: [],
    units: [],
    users: [],
  });

  const data = useRef<IContextData | null>(null);

  useEffect(() => {
    fetch();

    async function fetch() {
      try {
        const users = await getUsers();
        const units = await getUnits();
        const companies = await getCompanies();
        const assets = await getAssets();

        data.current = {
          users,
          units,
          companies,
          assets,
        };

        setSiderOptions(options(companies, units, users));
        setFilter({
          companies: [String(companies[0].id)],
          units: [String(units[0].id)],
          users: [String(users[0].id)],
        });
      } catch (e) {
        console.log("Error fetching data");
      }
    }
  }, []);

  function getData(): IContextDashboardData {
    if (!data.current)
      return {
        states: [],
        healthscores: [],
        coletasUptime: [],
      };

    const { assets } = data.current;

    const statesCounter = [0, 0, 0];
    const data_aux: {
      name: string;
      healthscore: number;
      coletaUptime: number;
    }[] = [];
    assets.forEach((asset) => {
      if (filterAsset(asset)) {
        if (asset.status === "inAlert") statesCounter[0] += 1;
        if (asset.status === "inOperation") statesCounter[1] += 1;
        if (asset.status === "inDowntime") statesCounter[2] += 1;

        data_aux.push({
          name: asset.name,
          healthscore: asset.healthscore,
          coletaUptime: new Date(asset.metrics.lastUptimeAt).getTime(),
        });
      }
    });

    return {
      states: states(statesCounter),
      healthscores: data_aux.map((d) => ({
        name: d.name,
        value: d.healthscore,
      })),
      coletasUptime: data_aux.map((d) => ({
        name: d.name,
        value: d.coletaUptime,
      })),
    };
  }

  function onClickSider(option: string, group: string) {
    const groupDict: {
      [T in SiderLabelOptions]: "companies" | "units" | "users";
    } = {
      Empresas: "companies",
      Unidades: "units",
      Colaboradores: "users",
    };

    const groupKey = groupDict[group as SiderLabelOptions];

    setFilter((oldFilter) => {
      return {
        ...oldFilter,
        [groupKey]: oldFilter[groupKey].includes(option)
          ? oldFilter[groupKey].filter((i) => i !== option)
          : [...oldFilter[groupKey], option],
      };
    });
  }

  function filterAsset({ assignedUserIds, companyId, unitId }: Asset) {
    const { users, companies, units } = filter;
    if (
      (!users.length ||
        assignedUserIds.some((a) => users.includes(String(a)))) &&
      (!companies.length || companies.includes(String(companyId))) &&
      (!units.length || units.includes(String(unitId)))
    )
      return true;

    return false;
  }

  return (
    <DataContext.Provider
      value={{
        siderOptions,
        getData,
        onClickSider,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
