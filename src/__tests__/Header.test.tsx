/* eslint-disable simple-import-sort/imports */
import { render, screen } from "@testing-library/react";

import Header from "../app/components/Header";
import React from "react";

describe("Header", () => {
  it("renders both buttons", () => {
    render(<Header />);

    const joinButtons = screen.getAllByText(/join/i);
    expect(joinButtons.length).toBeGreaterThan(0);
  });
});
