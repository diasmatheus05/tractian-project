import { State, TextType } from "../types";

export const states: {
  state: State;
  number: number;
  type: TextType;
}[] = [
  {
    state: "Em Alerta",
    type: "warning",
    number: 2,
  },
  {
    state: "Em Operação",
    type: "success",
    number: 2,
  },
  {
    state: "Em Parada",
    type: "danger",
    number: 2,
  },
];
