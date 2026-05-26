import { render, screen } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import Tags from "./Tags";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import axios from "axios";

describe("Tags_01", () => {
  const server = setupServer(
    http.get("http://localhost:3004/tags", () => {
      return HttpResponse.json([{ id: "1", name: "bar" }]);
    }),
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("render Tags", async () => {
    render(<Tags />);

    const tags = await screen.findAllByTestId("tag");

    expect(tags).toHaveLength(1);
    expect(tags[0]).toHaveTextContent("bar");
  });

  it("render with using spyOn", async () => {
    const mockedResponse = {
      data: [
        { id: "1", name: "bar" },
        { id: "2", name: "foo" },
      ],
    };

    vi.spyOn(axios, "get").mockResolvedValue(mockedResponse);

    render(<Tags />);

    const tags = await screen.findAllByTestId("tag");

    expect(tags).toHaveLength(2);
    expect(tags[1]).toHaveTextContent("foo");
  });
});
