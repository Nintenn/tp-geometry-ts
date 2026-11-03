import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter"
import Point from "../src/Point"
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test writing points", () => {
        const w = new WktWriter();
        const g = new Point();
        const h = new Point([1.0, 2.0]);
        expect(w.write(g)).to.equal("POINT EMPTY")
        expect(w.write(h)).to.equal("POINT (1 2)")
    });
    it("test writing linestrings", () => {
        const w = new WktWriter();
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0]),
            new Point([2.0, 5.0])
        ]);
        const h = new LineString();
        expect(w.write(h)).to.equal("LINESTRING EMPTY")
        expect(w.write(g)).to.equal("LINESTRING(3 4,0 0,2 5,)")
    });
});