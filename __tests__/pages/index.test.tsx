import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import IndexPage from "../../pages/index";

describe("IndexPage", () => {
  it("should render the index page", () => {
    render(<IndexPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
