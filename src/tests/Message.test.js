import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe("Message tests", () => {
  it("render author & text", () => {
    render(<Message author="Test author" text="Test text" />);
    const text = screen.getByText("Test author: Test text");
    expect(text).toBeDefined();
  });
});
