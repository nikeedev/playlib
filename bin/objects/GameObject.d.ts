import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
declare class GameObject {
    position: Vector2;
    protected screenSize: Size;
    constructor(position: Vector2, screenSize: Size);
    draw(ctx: any): void;
}
export { GameObject };
