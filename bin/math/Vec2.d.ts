/**
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 *
*/
declare class Vec2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    normalize(): void;
    magnitude(): number;
    lerp(v1: Vec2, v2: Vec2, t: number): Vec2;
}
export { Vec2 };
