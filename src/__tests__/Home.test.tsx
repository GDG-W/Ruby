import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "@/app/page";

describe("Home", () => {
  it("renders the hero content", () => {
    render(<Home />);
    const heading = screen.getByText(/LAGOS/i);
    expect(heading).toBeInTheDocument();
  });
});
