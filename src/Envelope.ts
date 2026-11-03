import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft ? bottomLeft : [];
        this.topRight = topRight ? topRight : [];
    }

    isEmpty() {
        return this.bottomLeft.length == 0 && this.topRight.length == 0;
    }

    getXmin(): number {
        if (!this.isEmpty()) {
            return this.bottomLeft[0]
        } else { return NaN }
    }

    getYmin(): number {
        if (!this.isEmpty()) {
            return this.bottomLeft[1]
        } else { return NaN }
    }
    getXmax(): number {
        if (!this.isEmpty()) {
            return this.topRight[0]
        } else { return NaN }
    }
    getYmax(): number {
        if (!this.isEmpty()) {
            return this.topRight[1]
        } else { return NaN }
    }

    toArray() {
        return [
            this.getXmin(),
            this.getYmin(),
            this.getXmax(),
            this.getYmax(),
        ];
    }

    toString(): string {
        return this.toArray().join(',');
    }
}