import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import categoryBar from "./index.js";

describe("categoryBar tests", () => {
  test("should show a category button", () => {
    render(
      <categoryBar
        categories={["React"]}
        activeCategory={"React"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByRole("button");
    expect(categoryButton).toBeInTheDocument();
  });

  test("button should have correct text content", () => {
    render(
      <categoryBar
        categories={["Array Methods"]}
        activeCategory={"React"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByRole("button");
    expect(categoryButton).toHaveTextContent("Array Methods");
  });

  test("button should have correct active class", () => {
    render(
      <categoryBar
        categories={["Array Methods", "React", "General"]}
        activeCategory={"General"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByText("General");
    expect(categoryButton).toHaveClass("category-btn active");
  });

  test("a function is called when button is clicked", () => {
    const testFunction = jest.fn();

    render(
      <categoryBar
        categories={["General"]}
        activeCategory={"General"}
        handleToggle={testFunction}
      />
    );

    const categoryButton = screen.getByRole("button");
    fireEvent.click(categoryButton);

    expect(testFunction).toHaveBeenCalled();
  });
});
