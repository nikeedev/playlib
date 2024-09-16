import { Vec2 } from '../math/Vec2.js';
import { GameObject } from './GameObject.js';
declare class Rect extends GameObject {
    position: Vec2;
    size: Vec2;
    protected screenSize: Vec2;
    color: string;
    constructor(position: Vec2, size: Vec2, screenSize: Vec2, color?: string);
    draw(ctx: CanvasRenderingContext2D): void;
}
export { Rect };
