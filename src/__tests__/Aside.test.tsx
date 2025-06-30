import { render, screen } from "@testing-library/react";

import Aside from "@/app/components/Aside";

describe("Aside", () => {
  it("renders default left and right text", () => {
    render(<Aside />);

    expect(screen.getByText("DEVFEST")).toBeInTheDocument();
    expect(screen.getByText("2025")).toBeInTheDocument();
  });

  it("renders quote text", () => {
    render(<Aside />);
    expect(screen.getByText(/are you there/i)).toBeInTheDocument();
  });

  it("renders all left icons", () => {
    render(<Aside />);
    const leftIcons = screen.getAllByRole("img", { name: /icons/i });
    expect(leftIcons.length).toBeGreaterThan(0);
  });

  it("renders all right icons", () => {
    render(<Aside />);
    const rightIcon = screen.getByRole("img", { name: /icons/i });
    expect(rightIcon).toBeInTheDocument();
  });

  it("allows custom text and icons via props", () => {
    const customLeft = "TECHCONF";
    const customRight = "2026";

    render(<Aside leftText={customLeft} rightText={customRight} />);

    expect(screen.getByText(customLeft)).toBeInTheDocument();
    expect(screen.getByText(customRight)).toBeInTheDocument();
  });
});
