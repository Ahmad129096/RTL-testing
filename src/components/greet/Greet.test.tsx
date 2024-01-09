import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test.only is used to run only a particular test
// test.skip is used to skip a particular test

// jest read following naming conventions to implement test
// files with .test.js or .test.tsx
// files with .spec.js or .spec.tsx
// files with .js or .tsx in __test__ folders

// it can also be used instead of test
// fit is used in replacement for test.only

describe("Greet test", () => {
  test("Case with hello", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("Case with hello and name", () => {
      render(<Greet name="hassan" />);
      const textElement = screen.getByText(/hello hassan/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
