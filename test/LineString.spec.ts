import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getNumPoints()).to.equal(0);
    });
    it("test constructor with points", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
        expect(g.getPointN(0)).to.deep.equal(new Point([3.0, 4.0]));
    });
    it("should return 'LineString' for getType()", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
    });
    it("should return expected points for getPointN()", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);

        expect((g.getPointN(0)).x()).to.equal(3.0);
        expect((g.getPointN(0)).y()).to.equal(4.0);

        expect((g.getPointN(1)).x()).to.equal(0.0);
        expect((g.getPointN(1)).y()).to.equal(0.0);

        expect((g.getPointN(2))).to.equal(undefined);
    });
    it("should return True for isEmpty()", () => {
        const g = new LineString();
        expect(g.isEmpty()).to.be.true;
    });
    it("should return False for isEmpty()", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);
        expect(g.isEmpty()).to.be.false;
    });
    it("should change the coordinates of the points for translate(dx,dy)", () => {
        const g = new LineString([
            new Point([3.0, 4.0]),
            new Point([0.0, 0.0])
        ]);
        expect((g.getPointN(0)).x()).to.equal(3.0);
        expect((g.getPointN(0)).y()).to.equal(4.0);

        expect((g.getPointN(1)).x()).to.equal(0.0);
        expect((g.getPointN(1)).y()).to.equal(0.0);
        g.translate(1.0, -2.0);
        expect((g.getPointN(0)).x()).to.equal(4.0);
        expect((g.getPointN(0)).y()).to.equal(2.0);

        expect((g.getPointN(1)).x()).to.equal(1.0);
        expect((g.getPointN(1)).y()).to.equal(-2.0);
    });
    it("shouldn't change the empty linestring for translate(dx,dy", () => {
        const g = new LineString();
        g.translate(1.0, -2.0);
        expect(g).to.deep.equal(new LineString());
    });


});
