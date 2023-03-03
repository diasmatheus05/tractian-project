import { WorkOrders } from "../types";
import api from "./api";

export async function getWorkOrders() {
  try {
    const response = await api.get("/workorders");
    return response.data as WorkOrders[];
  } catch (e) {
    throw new Error();
  }
}
