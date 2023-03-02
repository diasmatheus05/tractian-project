import { Company } from "../types";
import api from "./api";

export async function getCompanies() {
  try {
    const response = await api.get("/companies");
    return response.data as Company[];
  } catch (e) {
    throw new Error();
  }
}
