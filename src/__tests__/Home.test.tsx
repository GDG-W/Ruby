/* eslint-disable simple-import-sort/imports */
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
import React from "react";

describe("Home", () => {
  it("renders the hero content", () => {
    render(<Home />);
    const heading = screen.getByText(/LAGOS/i);
    expect(heading).toBeInTheDocument();
  });
});
