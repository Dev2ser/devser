import React from "react";
import { render } from "@testing-library/react";
import AdminPanel from "./../components/Admin";

it("renders AdminPanel Correctly", () => {
  const { queryByTestId } = render(<AdminPanel />);

  expect(queryByTestId("logout-btn")).toBeTruthy();
});
