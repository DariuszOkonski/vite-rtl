import { describe, expect, it } from "vitest";
import { range } from "./utils";


describe('utils', () => {
    describe('range', () => {
        it('renders proper array', () => {
            const result = range(1, 6)

            expect(result).toEqual([1,2,3,4,5])
        })
    })
})