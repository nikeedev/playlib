import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class GameObject {
    position: Vector2;
    protected screenSize: Size;
    constructor(position: Vector2, screenSize: Size);
    protected ClearScreen: boolean | undefined;
    draw(ctx: any, ClearScreen?: boolean): void;
}
export { GameObject };
