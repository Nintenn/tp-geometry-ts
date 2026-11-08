import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor {

    private buffer: string

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY"
        } else {
            this.buffer = `POINT (${point.x()} ${point.y()})`
        }
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY"
        } else {
            let texte: string = "LINESTRING(";
            const nb = lineString.getNumPoints();
            for (let i = 0; i < nb; i++) {
                texte = texte.concat(`${lineString.getPointN(i).x()} ${lineString.getPointN(i).y()},`)
            }
            texte = texte.concat(")");
            this.buffer = texte;
        }
    }

    getResult(): string {
        return this.buffer
    }
}