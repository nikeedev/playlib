import { Vec2 } from '../math/Vec2.js';
import { GameObject } from './GameObject.js';
declare class Text extends GameObject {
    text: string;
    position: Vec2;
    protected screenSize: Vec2;
    color: string;
    font: string;
    constructor(text: string, position: Vec2, screenSize: Vec2);
    draw(ctx: any): void;
}
export { Text };
