import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";


export default class EnvelopeBuilder implements GeometryVisitor {
    private coordinates: Array<Coordinate> = [];

    insert(coordinate: Coordinate) {
        this.coordinates.push(coordinate);
    }

    build(): Envelope {
        if (this.coordinates.length == 0) {
            return new Envelope();
        } else {
            let x_min: number = this.coordinates[0][0];
            let y_min: number = this.coordinates[0][1];
            let x_max: number = this.coordinates[0][0];
            let y_max: number = this.coordinates[0][1];
            this.coordinates.forEach(coordinate => {
                if (coordinate[0] < x_min) { x_min = coordinate[0] };
                if (coordinate[1] < y_min) { y_min = coordinate[1] };
                if (coordinate[0] > x_max) { x_max = coordinate[0] };
                if (coordinate[1] > y_max) { y_max = coordinate[1] };
            });
            return new Envelope([x_min, y_min], [x_max, y_max]);
        }
    }

    visitPoint(point: Point) {
        if (!point.isEmpty()) {
            this.insert(point.getCoordinate())
        }
        
    }

    visitLineString(lineString: LineString) {
        if (!lineString.isEmpty()) {
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                this.insert(lineString.getPointN(i).getCoordinate())
            }
        }
        
    }
}