import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubmissionForm from "./index.js";

describe("SubmissionForm tests", () => {
  test("should get submit input button by class", () => {
    render(<SubmissionForm categories={["React"]} />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });
});
