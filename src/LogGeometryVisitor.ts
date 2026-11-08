import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point) {
        if (point.isEmpty()) {
            console.log("Je suis un point vide.")
            return "Je suis un point vide."
        }
        else {
            console.log(`Je suis un point avec x=${point.x()} et y=${point.y()}.`)
            return `Je suis un point avec x=${point.x()} et y=${point.y()}.`
        }
    }

    visitLineString(lineString: LineString) {
        if (lineString.isEmpty()) {
            console.log("Je suis une polyligne vide.")
            return "Je suis une polyligne vide."
        }
        else {
            console.log(`Je suis une polyligne définie par ${lineString.getNumPoints()} point(s).`)
            return `Je suis une polyligne définie par ${lineString.getNumPoints()} point(s).`
        }
    }
}