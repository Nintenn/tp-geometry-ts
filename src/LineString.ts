import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points ? points : [];
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }

    translate(dx: number, dy: number) {
        if (!this.isEmpty()) {
            this.points.forEach(point => {
                point.translate(dx, dy)
            });


        }
    }

    clone(): LineString {
        const points = new Array<Point>;
        this.points.forEach(point => {
            points.push(point.clone())
        });
        return new LineString(points);
    }

    getEnvelope(): Envelope {
        const b = new EnvelopeBuilder();
        this.points.forEach(point => {
            b.insert(point.getCoordinate());
        });
        return b.build();
    }
}
