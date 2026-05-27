import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";
import * as utils from "../utils/utils";

vi.mock("../utils/utils.js", () => {
  return {
    range: () => [1, 2, 3],
  };
});

describe("Pagination_05", () => {
  it("render component", () => {
    render(<Pagination total={30} limit={10} currentPage={1} />);

    const pageContainer = screen.getAllByTestId("page-container");

    expect(pageContainer).toHaveLength(3);
    expect(pageContainer[0]).toHaveTextContent(1);
  });

  it("render component and selectPage", async () => {
    const user = userEvent.setup();
    const handleSelectPage = vi.fn();
    render(
      <Pagination
        total={30}
        limit={10}
        currentPage={1}
        selectPage={handleSelectPage}
      />,
    );

    const pageContainer = screen.getAllByTestId("page-container");

    await user.click(pageContainer[0]);

    expect(handleSelectPage).toHaveBeenCalledOnce();
    expect(handleSelectPage).toHaveBeenCalledWith(1);
  });

  it("spyOn range", () => {
    vi.spyOn(utils, "range");
    render(<Pagination total={30} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenLastCalledWith(1, 4);
  });
});
