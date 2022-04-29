/**
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 *
*/
declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    normalize(): void;
    magnitude(): number;
    lerp(v1: Vector2, v2: Vector2, t: number): Vector2;
}
export { Vector2 };
