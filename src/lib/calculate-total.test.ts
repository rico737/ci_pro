import { describe, expect, it } from "vitest";
import { calculateTotal } from "./calculate-total";

describe("calculateTotal", () => {
  it("multiplies price by quantity", () => {
    expect(calculateTotal(10, 3)).toBe(30);
  });

  it("returns zero when quantity is zero", () => {
    expect(calculateTotal(10, 0)).toBe(0);
  });

  it("rejects a negative price", () => {
    expect(() => calculateTotal(-10, 3)).toThrow(
      "Price and quantity must be non-negative",
    );
  });

  it("rejects a negative quantity", () => {
    expect(() => calculateTotal(10, -3)).toThrow(
      "Price and quantity must be non-negative",
    );
  });
});
