import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope"


describe("test LineString", () => {
    it("test if envelope is correctly created for empty point", () => {
        let p = new Point();
        p = new GeometryWithCachedEnvelope(p);
        
    });

});