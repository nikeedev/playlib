import { Vector2 } from '../math/Vector2.js';
import { GameObject } from './GameObject.js';
declare class Rect extends GameObject {
    position: Vector2;
    size: Vector2;
    protected screenSize: Vector2;
    color: string;
    constructor(position: Vector2, size: Vector2, screenSize: Vector2, color?: string);
    draw(ctx: any): void;
}
export { Rect };
