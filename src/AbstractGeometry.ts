import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export abstract class AbstractGeometry implements Geometry {
    abstract getType(): string
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number);
    abstract clone(): Geometry;
    abstract accept(visitor: GeometryVisitor): string;
    abstract getEnvelope(): Envelope;
    asText(): string {
        const v = new WktVisitor();
        this.accept(v);
        return v.getResult();
    };
}