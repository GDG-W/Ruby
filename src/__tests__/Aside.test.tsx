import { render, screen } from "@testing-library/react";
import React from "react";

import Aside from "../app/components/Aside";

describe("Aside", () => {
  it("renders all icons", () => {
    render(<Aside />);
    const icons = screen.getAllByRole("img", { name: /icons/i });
    expect(icons.length).toBeGreaterThan(1);
  });
});
