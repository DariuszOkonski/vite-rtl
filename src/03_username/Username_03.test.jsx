import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Username from "./Username";
import userEvent from "@testing-library/user-event";

describe("Username_03", () => {
  it("render empty component", () => {
    render(<Username />);

    const userName = screen.getByTestId("username");

    expect(userName).toHaveTextContent("");
  });

  it("setup state by click", async () => {
    const user = userEvent.setup();

    render(<Username />);

    const userName = screen.getByTestId("username");
    const button = screen.getByTestId("button");

    await user.click(button);

    expect(userName).toHaveTextContent("bar");
  });

  it("setup state by typing", async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId("username");
    const usernameInput = screen.getByTestId("usernameInput");

    await user.type(usernameInput, "foo");

    expect(username).toHaveTextContent("foo");
  });
});
