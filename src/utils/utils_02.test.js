import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    it("check basic array 1-6", () => {
      const result = range(1, 6);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("check array with range 41-45", () => {
      const result = range(41, 46);

      expect(result).toEqual([41, 42, 43, 44, 45]);
    });
  });
});
