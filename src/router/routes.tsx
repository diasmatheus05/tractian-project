import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Details } from "../pages/Details";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
