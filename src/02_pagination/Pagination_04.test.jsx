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

describe("Pagination_04", () => {
  it("renders Pagination", () => {
    render(<Pagination total={30} limit={10} currentPage={10} />);

    const pageContainer = screen.getAllByTestId("page-container");

    expect(pageContainer).toHaveLength(3);
    expect(pageContainer[0]).toHaveTextContent("1");
  });

  it("renders Pagination and call selectPage", async () => {
    const user = userEvent.setup();
    const handleSelectPage = vi.fn();

    render(
      <Pagination
        total={30}
        limit={10}
        currentPage={10}
        selectPage={handleSelectPage}
      />,
    );

    const pageContainer = screen.getAllByTestId("page-container");

    await user.click(pageContainer[0]);

    expect(handleSelectPage).toHaveBeenCalledOnce();
    expect(handleSelectPage).toHaveBeenCalledWith(1);
  });

  it("spyOn range", async () => {
    vi.spyOn(utils, "range");

    render(<Pagination total={30} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalledWith(1, 4);
  });
});
