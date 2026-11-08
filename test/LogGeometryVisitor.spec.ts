import { describe, it, expect } from "vitest";
import WktWriter from "../src/LogGeometryVisitor"
import Point from "../src/Point";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test visiting empty point", () => {
        const p = new Point();
        const v = new LogGeometryVisitor();
        expect(v.visitPoint(p)).to.equal("Je suis un point vide.")
    });
    it("test visiting point", () => {
        const p = new Point([3.0, 4.0]);
        const v = new LogGeometryVisitor();
        expect(v.visitPoint(p)).to.equal("Je suis un point avec x=3 et y=4.")
    });
    it("test visiting empty linestring", () => {
        const g = new LineString();
        const v = new LogGeometryVisitor();
        expect(v.visitLineString(g)).to.equal("Je suis une polyligne vide.")
    });
    it("test visiting linestring", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);
        const v = new LogGeometryVisitor();
        expect(v.visitLineString(g)).to.equal("Je suis une polyligne définie par 2 point(s).")
    });
});