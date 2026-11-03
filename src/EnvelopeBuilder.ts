import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
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
}