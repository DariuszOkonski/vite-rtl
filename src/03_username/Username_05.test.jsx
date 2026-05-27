import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Username from "./Username";
import userEvent from "@testing-library/user-event";

describe("Username_05", () => {
  it("render component", () => {
    render(<Username />);

    const username = screen.getByTestId("username");

    expect(username).toHaveTextContent("");
  });

  it("change component state by click", async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId("username");
    const button = screen.getByTestId("button");

    await user.click(button);

    expect(username).toHaveTextContent("bar");
  });

  it("change component state by input", async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId("username");
    const usernameInput = screen.getByTestId("usernameInput");

    await user.type(usernameInput, "foo");

    expect(username).toHaveTextContent("foo");
  });
});
