import { State, TextType } from "../../../../types";

export interface StateBoxProps {
  state: State;
  number: number;
  type: TextType;
}

export interface EstadoAtualProps {
  states: StateBoxProps[];
}
