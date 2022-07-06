import { Size } from '../math/Size';
import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Rect extends GameObject {
    position: Vector2;
    size: Size;
    protected screenSize: Size;
    constructor(position: Vector2, size: Size, screenSize: Size);
    color: string;
    draw(ctx: any): void;
}
export { Rect };
