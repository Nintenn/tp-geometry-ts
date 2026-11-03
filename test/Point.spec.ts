import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
    it("should return True for isEmpty()", () => {
        const p = new Point();
        expect(p.isEmpty()).to.be.true;
    });
    it("should return False for isEmpty()", () => {
        const p = new Point([2.0, 3.0]);
        expect(p.isEmpty()).to.be.false;
    });
    it("should change the coordinates for translate(dx,dy)", () => {
        const p = new Point([2.0, 3.0]);
        expect(p.x()).to.equal(2.0);
        expect(p.y()).to.equal(3.0);
        p.translate(1.0, -2.0);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(1.0);
    });
    it("should change the coordinates for translate(dx,dy)", () => {
        const p = new Point([0.0, 0.0]);
        expect(p.x()).to.equal(0.0);
        expect(p.y()).to.equal(0.0);
        p.translate(1.0, -2.0);
        expect(p.x()).to.equal(1.0);
        expect(p.y()).to.equal(-2.0);
    });
    it("shouldn't change the empty point for translate(dx,dy)", () => {
        const p = new Point();
        p.translate(1.0, -2.0);
        expect(p).to.deep.equal(new Point());
    });

    it("should create an identical point for clone() with independant coordinates", () => {
        const p = new Point([1.0, 1.0]);
        const q = p.clone();
        q.translate(1.0, 1.0);
        expect(p.x()).to.equal(1.0);
        expect(p.y()).to.equal(1.0);
        expect(q.x()).to.equal(2.0);
        expect(q.y()).to.equal(2.0);
    });

    it("should create another empty point for clone()", () => {
        const p = new Point();
        const q = p.clone();
        expect(p.isEmpty()).to.be.true;
        expect(q.isEmpty()).to.be.true;
    })

});

