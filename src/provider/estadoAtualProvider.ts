import { State, TextType } from "../types";

export const states = (
  numbers: number[]
): {
  state: State;
  number: number;
  type: TextType;
}[] => [
  {
    state: "Em Alerta",
    type: "warning",
    number: numbers[0],
  },
  {
    state: "Em Operação",
    type: "success",
    number: numbers[1],
  },
  {
    state: "Em Parada",
    type: "danger",
    number: numbers[2],
  },
];

export const currentState: {
  [T in
    | "inAlert"
    | "inDowntime"
    | "inOperation"
    | "unplannedStop"
    | "plannedStop"]: {
    state:
      | "Em Alerta"
      | "Em Parada"
      | "Em Operação"
      | "Parada Não Planejada"
      | "Parada Planejada";
    type: "warning" | "success" | "error";
    color: string;
  };
} = {
  inAlert: { state: "Em Alerta", type: "warning", color: "#FE8F09" },
  inDowntime: { state: "Em Parada", type: "error", color: "#FD2223" },
  inOperation: { state: "Em Operação", type: "success", color: "#16A349" },
  unplannedStop: {
    state: "Parada Não Planejada",
    type: "error",
    color: "#FD2223",
  },
  plannedStop: { state: "Parada Planejada", type: "error", color: "#FD2223" },
};
