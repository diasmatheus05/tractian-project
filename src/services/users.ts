import { User } from "../types";
import api from "./api";

export async function getUsers() {
  try {
    const response = await api.get("/users");
    return response.data as User[];
  } catch (e) {
    throw new Error();
  }
}
