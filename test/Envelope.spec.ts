import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope"

describe("test LineString", () => {
    it("test default constructor", () => {
        const e = new Envelope();
        expect(e.isEmpty()).to.be.true;
        expect(e.toString()).to.equal("NaN,NaN,NaN,NaN")
    });
    it("test constructor with points", () => {
        const e = new Envelope([1.0, 2.0], [3.0, 4.0]);
        expect(e.isEmpty()).to.be.false;
        expect(e.toString()).to.equal("1,2,3,4");
    });
});