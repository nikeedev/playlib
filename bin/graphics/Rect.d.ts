import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class Rect {
    position: Vector2;
    size: Size;
    private screenSize;
    constructor(position: Vector2, size: Size, screenSize: Size);
    color: string;
    private ClearScreen;
    draw(ctx: any, ClearScreen?: boolean): void;
}
export { Rect };
