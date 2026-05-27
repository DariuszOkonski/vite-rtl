import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe("utils_05", () => {
  describe("range", () => {
    it("should return range between 1-5", () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("should return range between 41-44", () => {
      const result = range(41, 45);
      expect(result).toEqual([41, 42, 43, 44]);
    });
  });
});
