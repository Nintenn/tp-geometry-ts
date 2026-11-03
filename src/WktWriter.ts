import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY"
            } else {
                return `POINT (${geometry.x()} ${geometry.y()})`
            }
        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY"
            } else {
                let texte: string = "LINESTRING(";
                const nb = geometry.getNumPoints();
                for (let i = 0; i < nb; i++) {
                    texte = texte.concat(`${geometry.getPointN(i).x()} ${geometry.getPointN(i).y()},`)
                }
                texte = texte.concat(")");
                return texte;
            }
        } else {
            throw new TypeError("geometry type not supported");
        }
    }
}