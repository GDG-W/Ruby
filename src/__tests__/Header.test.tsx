import { render, screen } from "@testing-library/react";

import Header from "@/app/components/Header";

describe("Header", () => {
  it("renders the logo and heading", () => {
    render(<Header />);

    expect(screen.getByText(/lagos/i)).toBeInTheDocument();
  });

  it("renders both buttons", () => {
    render(<Header />);

    expect(screen.getByText(/join/i)).toBeInTheDocument();
    expect(screen.getByText(/recap/i)).toBeInTheDocument();
  });

  it("renders the vector and play icons", () => {
    render(<Header />);

    expect(screen.getAllByRole("img", { hidden: true }).length).toBeGreaterThan(0);
  });
});
