import { AssetState, State, TextType } from "../types";

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

export const statesDict: { [T in AssetState]: State } = {
  inAlert: "Em Alerta",
  inDowntime: "Em Parada",
  inOperation: "Em Operação",
};
