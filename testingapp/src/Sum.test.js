// Sum.test.js
import add from "./Sum.js";

describe("Testing add function", () => {
    test("should return correct sum of two numbers", () => {
        expect(add(10, 20)).toBe(30);
    });
});
