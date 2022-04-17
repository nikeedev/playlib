/**
 * @author nikeedev
 *
 * @license MIT
 * @type {HTMLCanvasElement}
 *
 * @description This is datatype for storing **x** and **y** axis in a variable/const/let
 *
*/
class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = (x === undefined) ? 0 : x;
        this.y = (x === undefined) ? 0 : y;
    }
    combine(Vec1, Vec2) {
        return new Vector2(Vec1.x + Vec2.x, Vec1.y + Vec2.y);
    }
}
export { Vector2 };
