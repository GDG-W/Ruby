/* eslint-disable simple-import-sort/imports */
import { render, screen } from "@testing-library/react";

import Aside from "../app/components/Aside";
import React from "react";

describe("Aside", () => {
  it("renders all icons", () => {
    render(<Aside />);
    const icons = screen.getAllByRole("img", { name: /icons/i });
    expect(icons.length).toBeGreaterThan(1);
  });
});
