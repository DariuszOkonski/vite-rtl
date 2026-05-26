import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe("range", () => {
  describe("range", () => {
    it("range between 1-6", () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("range between 41-44", () => {
      const result = range(41, 44);
      expect(result).toEqual([41, 42, 43]);
    });
  });
});
