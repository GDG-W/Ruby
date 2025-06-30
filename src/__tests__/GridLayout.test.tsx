import { render, screen } from "@testing-library/react";

import GridLayout from "@/app/components/GridLayout";

describe("GridLayout", () => {
  it("renders children correctly", () => {
    render(
      <GridLayout>
        <div>Test Content</div>
      </GridLayout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies background styles", () => {
    const { container } = render(
      <GridLayout>
        <div>Content</div>
      </GridLayout>
    );

    const grid = container.firstChild as HTMLElement;

    expect(grid).toHaveStyle({
      backgroundImage: `url(/Pattern.svg)`,
    });
  });
});
