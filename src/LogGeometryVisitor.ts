import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point) {
        if (point.isEmpty()) {
            return "Je suis un point vide."
        }
        else {
            return `Je suis un point avec x=${point.x()} et y=${point.y()}.`
        }
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            return "Je suis une polyligne vide."
        }
        else {
            return `Je suis une polyligne définie par ${lineString.getNumPoints()} point(s).`
        }
    }
}