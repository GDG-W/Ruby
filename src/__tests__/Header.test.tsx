import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../app/components/Header";

describe("Header", () => {
  it("renders both buttons", () => {
    render(<Header />);

    const joinButtons = screen.getAllByText(/join/i);
    expect(joinButtons.length).toBeGreaterThan(0);
  });
});
