import { AbstractGeometry } from "./AbstractGeometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";

export default class LineString extends AbstractGeometry {
    private points: Array<Point>;

    constructor(points?: Array<Point>) {
        super()
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
        return super.getEnvelope();
    }

    accept(visitor: GeometryVisitor): string {
        return visitor.visitLineString(this);
    }

    asText(): string {
        return super.asText()
    }
}
