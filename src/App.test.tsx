import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  render(<App />);
  const text = screen.getByText(/Hello Word/i);
  expect(text).toBeInTheDocument();
});
