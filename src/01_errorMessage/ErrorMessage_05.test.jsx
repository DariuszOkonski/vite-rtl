import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage_05", () => {
  it("render component with default message", () => {
    render(<ErrorMessage />);

    const messageContainer = screen.getByTestId("message-container");

    expect(messageContainer).toHaveTextContent("Something went wrong");
  });

  it("render component with custom message", () => {
    render(<ErrorMessage message="404 Error" />);

    const messageContainer = screen.getByTestId("message-container");

    expect(messageContainer).toHaveTextContent("404 Error");
  });
});
