import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage_04", () => {
  it("render ErrorMessage with default message", () => {
    render(<ErrorMessage />);

    const messageContainer = screen.getByTestId("message-container");

    expect(messageContainer).toHaveTextContent("Something went wrong");
  });

  it("render ErrorMessage with custom message", () => {
    render(<ErrorMessage message="404 Error" />);
    const messageContaier = screen.getByTestId("message-container");

    expect(messageContaier).toHaveTextContent("404 Error");
  });
});
