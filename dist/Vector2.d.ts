/**
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 *
*/
declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    combine(Vec1: Vector2, Vec2: Vector2): Vector2;
}
export { Vector2 };
