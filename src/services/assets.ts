import { Asset } from "../types";
import api from "./api";

export async function getAssets() {
  try {
    const response = await api.get("/assets");
    return response.data as Asset[];
  } catch (e) {
    throw new Error();
  }
}
