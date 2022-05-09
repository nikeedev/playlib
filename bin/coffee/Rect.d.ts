import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class Rect {
    position: Vector2;
    size: Size;
    screenSize: Size;
    constructor(position: Vector2, size: Size, screenSize: Size);
    color: string;
    ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen?: boolean): void;
    update(ctx: any, func: any, ClearScreen?: boolean): void;
}
export { Rect };
