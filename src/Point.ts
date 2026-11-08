import { AbstractGeometry } from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super()
    this.coordinate = coordinate ? coordinate : [];
  }

  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    if (this.isEmpty()) {
      return NaN
    } else {
      return this.coordinate[0]
    };

  }

  y(): number {
    if (this.isEmpty()) {
      return NaN
    } else {
      return this.coordinate[1]
    };
  }

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  translate(dx: number, dy: number) {
    if (!this.isEmpty()) {
      this.coordinate[0] += dx;
      this.coordinate[1] += dy;
    }
  }

  clone(): Point {
    if (!this.isEmpty()) {
      return new Point([this.x(), this.y()])
    } else {
      return new Point();
    }
  }

  getEnvelope(): Envelope {
    return super.getEnvelope();
  }

  accept(visitor: GeometryVisitor): string {
    return visitor.visitPoint(this);
  }

  asText(): string {
    return super.asText()
  }

}
