import { Unit } from "../types";
import api from "./api";

export async function getUnits() {
  try {
    const response = await api.get("/units");
    return response.data as Unit[];
  } catch (e) {
    throw new Error();
  }
}
