import { describe, it, expect } from "vitest";
import WktWriter from "../src/LogGeometryVisitor"
import Point from "../src/Point";
import WktVisitor from "../src/WktVisitor";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test visiting empty point", () => {
        const p = new Point();
        const v = new WktVisitor();
        p.accept(v);
        expect(v.getResult()).to.equal("POINT EMPTY")
    });
    it("test visiting point", () => {
        const p = new Point([3.0, 4.0]);
        const v = new WktVisitor();
        p.accept(v);
        expect(v.getResult()).to.equal("POINT (3 4)")
    });
    it("test visiting empty linestring", () => {
        const g = new LineString();
        const v = new WktVisitor();
        g.accept(v);
        expect(v.getResult()).to.equal("LINESTRING EMPTY")
    });
    it("test visiting linestring", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);
        const v = new WktVisitor();
        g.accept(v);
        expect(v.getResult()).to.equal("LINESTRING(3 4,0 0,)")
    });
});