import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DashboardIndexPage from "@/pages/dashboard/index";

describe("Describe our dashboard page", () => {
  it("should render the dashboard page", () => {
    render(<DashboardIndexPage />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
