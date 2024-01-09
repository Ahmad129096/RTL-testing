import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // const nameElement1 = screen.getByPlaceholderText("Fullname");
    // expect(nameElement1).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText("Name");
    // expect(nameElement2).toBeInTheDocument();

    const pageElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageElement).toBeInTheDocument();

    const mandatoryText = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(mandatoryText).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", { level: 2 });
    expect(sectionElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("submitButton");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
