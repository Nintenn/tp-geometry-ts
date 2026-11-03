import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder"

describe("test LineString", () => {
    it("test builder without points", () => {
        const b = new EnvelopeBuilder();
        const e = b.build();
        expect(e.isEmpty()).to.be.true;
        expect(e.toString()).to.equal("NaN,NaN,NaN,NaN")
    });
    it("test builder with points", () => {
        const b = new EnvelopeBuilder();

        b.insert([1.0, 1.0]);
        b.insert([2.0, 1.0]);
        b.insert([0.0, 0.0]);
        b.insert([5.0, -3.0]);
        b.insert([6.0, 2.0]);
        b.insert([-1.0, -6.0]);
        b.insert([0.0, 1.0]);
        b.insert([1.0, 2.0]);

        const e = b.build();
        expect(e.isEmpty()).to.be.false;
        expect(e.toString()).to.equal("-1,-6,6,2");
    });
});