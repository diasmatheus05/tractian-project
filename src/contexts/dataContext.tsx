import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { usePagination } from "../hooks";
import { states } from "../provider";
import { getAssets, getCompanies, getUnits, getUsers } from "../services";
import { getWorkOrders } from "../services/workorders";
import {
  Asset,
  IContextDashboardData,
  IContextData,
  IContextDetailsData,
  SiderLabelOptions,
  Unit,
  User,
} from "../types";

interface DataContextProviderProps {
  children: React.ReactNode;
}

interface DataContextProps {
  data: IContextData | null;
  getDashboardData: () => IContextDashboardData;
  onClickSider: (option: string, group: string) => void;
  getDetailsData: () => IContextDetailsData;
}

const DataContext = createContext({} as DataContextProps);

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [filter, setFilter] = useState<{
    companies: string[];
    units: string[];
    users: string[];
  }>({
    companies: [],
    units: [],
    users: [],
  });

  const [detailSelected, setDetailSelected] = useState<number[]>([]);

  const data = useRef<IContextData | null>(null);

  const { pathname } = useLocation();
  const { getPageName } = usePagination(pathname);

  useEffect(() => {
    fetch();

    async function fetch() {
      try {
        const users = await getUsers();
        const units = await getUnits();
        const companies = await getCompanies();
        const assets = await getAssets();
        const workorders = await getWorkOrders();

        data.current = {
          users,
          units,
          companies,
          assets,
          workorders,
        };

        setFilter({
          companies: [String(companies[0].id)],
          units: [String(units[0].id)],
          users: [String(users[0].id)],
        });
        setDetailSelected([companies[0].id, 0]);
      } catch (e) {
        console.log("Error fetching data");
      }
    }
  }, []);

  function getDashboardData(): IContextDashboardData {
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
    if (getPageName() === "Dashboard") {
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
    } else {
      setDetailSelected(option.split("-").map((n) => Number(n)));
    }
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

  function getCompanyById(id: number) {
    return data.current?.companies.find((item) => item.id === id);
  }

  function getUnitById(id: number) {
    return data.current?.units.find((item) => item.id === id);
  }

  // Refatorar função
  function getDetailsData() {
    if (!data.current) return {} as IContextDetailsData;

    const detailsIdDict: {
      [T in number]: {
        text: "Empresa" | "Unidade" | "Colaborador" | "Ativo";
        value: "companies" | "units" | "users" | "assets";
      };
    } = {
      0: { text: "Empresa", value: "companies" },
      1: { text: "Unidade", value: "units" },
      2: { text: "Colaborador", value: "users" },
      3: { text: "Ativo", value: "assets" },
    };

    const [itemId, groupId] = detailSelected;
    const detail = detailsIdDict[groupId];

    const selectedItem = data.current[detail.value].find(
      (item) => item.id === itemId
    )!;

    var company = undefined;
    if (groupId > 0) {
      company = getCompanyById((selectedItem as Unit | User | Asset).companyId);
    } else if (groupId === 0) {
      company = selectedItem;
    }
    var unit = undefined;
    if (groupId > 1) {
      unit = getUnitById((selectedItem as User | Asset).unitId);
    } else if (groupId === 1) {
      unit = selectedItem as Unit;
    }
    var user = undefined;
    var workorders = undefined;
    if (groupId === 2) {
      user = selectedItem as User;
      workorders = data.current.workorders.filter((item) =>
        item.assignedUserIds.includes(itemId)
      );
    }
    var asset = undefined;
    if (groupId === 3) {
      asset = selectedItem as Asset;
      workorders = data.current.workorders.filter(
        (item) => item.assetId === itemId
      );
    }

    const lists: {
      name: "unidades" | "colaboradores";
      list: string[];
    }[] = [];
    if (groupId === 0) {
      lists.push({
        name: "unidades",
        list: data.current.units.reduce<string[]>(
          (accumulator, current) =>
            current.companyId === itemId
              ? accumulator.concat(current.name)
              : accumulator,
          []
        ),
      });
      lists.push({
        name: "colaboradores",
        list: data.current.users.reduce<string[]>(
          (accumulator, current) =>
            current.companyId === itemId
              ? accumulator.concat(current.name)
              : accumulator,
          []
        ),
      });
    } else if (groupId === 1) {
      lists.push({
        name: "colaboradores",
        list: data.current.users.reduce<string[]>(
          (accumulator, current) =>
            current.unitId === itemId
              ? accumulator.concat(current.name)
              : accumulator,
          []
        ),
      });
    }

    var assetsList = undefined;
    if (groupId !== 3) {
      assetsList = data.current.assets.reduce<Asset[]>(
        (accumulator, current) =>
          (groupId === 0 && current.companyId === itemId) ||
          (groupId === 1 && current.unitId === itemId) ||
          (groupId === 2 && current.assignedUserIds.includes(itemId))
            ? accumulator.concat(current)
            : accumulator,
        []
      );
    }

    return {
      type: detail.text,
      name: selectedItem.name,
      breadcrumb: {
        company: company?.name,
        unit: unit?.name,
        user: user?.name,
        asset: asset?.name,
      },
      lists,
      assetsList: assetsList || [],
      asset,
      workorders,
    };
  }

  return (
    <DataContext.Provider
      value={{
        data: data.current,
        getDashboardData,
        onClickSider,
        getDetailsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
